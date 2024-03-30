<?php

namespace App\Http\Controllers;

use App\Actions\Comment\DeleteComment;
use App\Actions\Comment\StoreComment;
use App\Actions\Comment\UpdateComment;
use App\Events\CommentCreatedEvent;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Resources\CommentResource;
use App\Http\Resources\StoreCommentResource;
use App\Models\Comment;
use App\Policies\CommentPolicy;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index($id)
    {
        $comment = Comment::with('post')->find($id);

        return redirect()
            ->route('post', [
                'id' => $comment->post->id,
                'slug' => $comment->post->slug,
                'comment' => $comment->id,
            ]);
    }

    public function store(StoreCommentRequest $request)
    {
        $comment = StoreComment::fromRequest($request);

        event(new CommentCreatedEvent($comment));

        return StoreCommentResource::make($comment);
    }

    public function delete(Request $request)
    {
        $comment = Comment::findOrFail($request->id);

        $this->authorize(CommentPolicy::DELETE, $comment);

        $data = DeleteComment::fromRequest($comment, $request);

        return response()->json($data);

    }

    public function update(StoreCommentRequest $request)
    {
        $comment = Comment::published()->findOrFail($request->id);

        $this->authorize(CommentPolicy::UPDATE, $comment);

        $comment = UpdateComment::fromRequest($comment, $request);

        return $comment->only(['image', 'text']);
    }

    public function getByPostId($post_id)
    {
        $comments = Comment::where('post_id', $post_id)
            ->withTrashed()
            ->with(['replies', 'user' => ['roles'], 'reputationRelation', 'comment', 'image'])
            ->latest()
            ->get();

        return CommentResource::collection($comments);
    }
}
