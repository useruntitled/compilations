<?php

namespace App\Listeners;

use App\Events\CommentDeletedEvent;
use App\Models\Comment;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ForceDeleteDeletedParent
{
    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
        $comment = $event->comment;

        if ($comment->comment_id !== null) {
            $parent = Comment::withoutGlobalScope(SoftDeletingScope::class)
                ->withCount('repliesRelation')
                ->findOrFail($comment->comment_id);
            if ($parent->is_deleted && $parent->replies_count == 0) {
                $parent->forceDelete();
                event(new CommentDeletedEvent($parent));
            }
        }
    }
}
