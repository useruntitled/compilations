<?php

namespace App\Http\Controllers;

use App\Actions\Comment\DeleteComment;
use App\Actions\Comment\StoreComment;
use App\Actions\Comment\UpdateComment;
use App\Events\CommentCreatedEvent;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Resources\Comment\CommentResource;
use App\Http\Resources\Comment\StoreCommentResource;
use App\Models\Comment;
use App\Policies\CommentPolicy;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index($id)
    {
        $comment = Comment::with('postRelation')->withTrashed()->find($id);

        return redirect()
            ->route('post', [
                'id' => $comment->post->id,
                'slug' => $comment->post->slug,
                'comment' => $comment->id,
            ]);
    }

    public function store(StoreCommentRequest $request)
    {
        $comment = StoreComment::handle($request->validated());

        event(new CommentCreatedEvent($comment));

        return StoreCommentResource::make($comment);
    }

    public function delete(Request $request)
    {
        $comment = Comment::findOrFail($request->id);

        $this->authorize(CommentPolicy::DELETE, $comment);

        $data = DeleteComment::handle($comment);

        return response()->json($data);

    }

    public function update(StoreCommentRequest $request)
    {
        $comment = Comment::published()->findOrFail($request->id);

        $this->authorize(CommentPolicy::UPDATE, $comment);

        $comment = UpdateComment::handle($comment, $request->validated());

        return $comment->only(['image', 'text']);
    }

    public function getByPostId($post_id)
    {
        $comments = Comment::where('post_id', $post_id)
            ->withTrashed()
            ->with([
                'repliesRelation',
                'userRelation',
                'reputationRelation',
                'commentRelation',
                'mediaRelation',
            ])
            ->latest()
            ->get();

        return CommentResource::collection($comments);
    }
}
