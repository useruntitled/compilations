<?php

namespace App\Http\Controllers;

use App\Events\CommentCreatedEvent;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Resources\CommentResource;
use App\Http\Resources\StoreCommentResource;
use App\Models\Comment;
use App\Models\Media;
use App\Policies\CommentPolicy;
use App\Services\Media\MediaService;
use App\Services\Media\MediaUploader;
use App\Services\NotificationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    protected MediaService $service;

    public function __construct(MediaService $service)
    {
        $this->service = $service;
    }

    public function index($id, NotificationService $service)
    {
        $comment = Comment::with('post')->find($id);
        if($comment == null) {
            $service->deleteByObjectId(Auth::id(),$id);
            abort(404);
        };

        return redirect()
            ->route('post', [
                'id' => $comment->post->id,
                'slug' => $comment->post->slug,
                'comment' => $comment->id,
            ]);
    }

    public function store(StoreCommentRequest $request)
    {
        if ($request->comment_id) {
            $comment = Comment::find($request->comment_id);

            $level = $comment->level + 1;
        } else {
            $level = 0;
        }

        $comment = Comment::create([
            'post_id' => $request->post_id,
            'comment_id' => $request->comment_id,
            'text' => preg_replace('/(<div><br><\/div>\s*)+$/', '', $request->text),
            'level' => $level,
            'user_id' => Auth::user()->id,
        ]);

        if ($request->image != null) {
            MediaUploader::toObject($request->input('image')['href'], $comment);
        }

        event(new CommentCreatedEvent($comment));
        return StoreCommentResource::make($comment);
    }

    public function delete(Request $request, MediaService $media)
    {
        $request->validate([
            'id' => 'required',
        ]);

        $comment = Comment::findOrFail($request->id);

        $this->authorize(CommentPolicy::DELETE, $comment);

        $isForceDeleted = 0;

        if ($comment->image) $media->delete($comment->image);

        if ($comment->replies->count() == 0) {
            $isForceDeleted = 1;
            $comment->forceDelete();
            return response()->json([
                'is_force_deleted' => $isForceDeleted,
                'data' => $comment->only(['id', 'text']),
            ]);
        }

        $comment->delete();


        $comment->text = Comment::DELETED_TEXT;

        $comment->update();

        return response()->json([
            'is_force_deleted' => $isForceDeleted,
            'data' => $comment->only(['id', 'text', 'image', 'image_preview']),
        ]);

    }

    public function update(StoreCommentRequest $request, MediaService $service)
    {
        $validated = $request->validate([
            'text' => 'min:0|max:2000',
            'id' => 'required',
        ]);

        $comment = Comment::find($validated['id']);

        $this->authorize(CommentPolicy::UPDATE, $comment);

        if($comment->is_deleted) abort(422);

        if ($request->image != null) {
            MediaUploader::toObject($request->input('image')['href'], $comment);
        } else if ($comment->image) {
            $service->delete($comment->image);
            $comment->image()->delete();
        }

        $comment->text = preg_replace('/(<div><br><\/div>\s*)+$/', '', $request->text);
        $comment->update();

        return $comment->only(['image', 'text']);
    }

    public function getByPostId($post_id)
    {
        $comments = Comment::where('post_id', $post_id)
            ->with(['replies', 'user' => ['roles'], 'reputationRelation', 'comment', 'image'])
            ->latest()
            ->get();

        return CommentResource::collection($comments);
    }
}
