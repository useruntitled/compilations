<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class CommentController extends Controller
{
    protected $service;

    public function __construct(ImageService $service)
    {
        $this->service = $service;
    }

    public function index($id)
    {
        $comment = Comment::with('post')->findOrFail($id);

        return redirect()
            ->route('post', [
                'id' => $comment->post->id,
                'slug' => $comment->post->slug,
                'comment' => $comment->id,
            ]);
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'text' => 'min:0|max:2000',
            'comment_id' => 'min:1',
            'post_id' => 'required',
        ]);

        return Response::json($this->store($request), 200);

    }

    public function store($request)
    {
        if ($request->hasFile('image')) {
            $filename = $this->service->uploadAndDelete($request->file('image'), null);
        } else {
            $filename = null;
        }

        if ($request->comment_id) {
            $comment = Comment::find($request->comment_id);

            $level = Comment::find($comment->comment_id)->level + 1;
        } else {
            $level = 0;
        }

        $comment = Comment::create([
            'post_id' => $request->post_id,
            'comment_id' => $request->comment_id,
            'text' => nl2br($request->text),
            'level' => $level,
            'user_id' => Auth::user()->id,
            'image' => $filename,
        ]);

        if ($comment != null) {
            $comment->load(['reputation']);

            return new CommentResource($comment);
        }

        return 'Error in store method';
    }

    public function delete(Request $request, ImageService $service)
    {
        $request->validate([
            'id' => 'required',
        ]);

        $comment = Comment::find($request->id);

        $isForceDeleted = 0;

        if ($comment->replies->count() == 0) {
            $isForceDeleted = 1;
            $comment->forceDelete();


            return response()->json([
                'is_force_deleted' => $isForceDeleted,
                'data' => $comment,
            ]);
        }

        $comment->delete();

        $comment->text = 'Комментарий удалён';
        $service->delete($comment->image);
        $comment->image = null;
        $comment->update();

        return response()->json([
            'is_force_deleted' => $isForceDeleted,
            'data' => $comment,
        ]);

    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'text' => 'min:0|max:2000',
            'id' => 'required',
        ]);

        $comment = Comment::find($validated['id']);

        if ($request->hasFile('image') && $request->hasImage == 'true') {
            $filename = $this->service->uploadAndDelete($request->file('image'), null);
            $comment->image = $filename;
        }

        if ($request->hasImage == 'false') {
            $comment->image = null;
            $this->service->delete($comment->image);
        }

        $comment->text = nl2br($validated['text']);
        $comment->update();

        return $comment;
    }

    public function getByPostId($post_id)
    {
        $comments = Comment::where('post_id', $post_id)
            ->with(['replies', 'user' => ['roles'], 'reputation', 'comment'])
            ->latest()
            ->get();

        return CommentResource::collection($comments);
    }
}
