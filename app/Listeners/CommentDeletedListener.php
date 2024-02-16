<?php

namespace App\Listeners;

use App\Events\CommentDeletedEvent;
use App\Models\Comment;
use App\Services\NotificationService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CommentDeletedListener implements ShouldQueue
{
    protected $service;

    /**
     * Create the event listener.
     */
    public function __construct(NotificationService $service)
    {
        $this->service = $service;
    }

    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {

        $comment = $event->comment;

        $this->deletePostWasCommentedNotification($comment);
        $this->deleteReplyNotification($comment);

        // Transaction or something needed here
        $this->destroyDeletedParrent($comment);
    }

    protected function deletePostWasCommentedNotification($comment): void
    {
        $this->service->deleteAndCallEvent($comment->postUser, $comment);
    }

    protected function deleteReplyNotification($comment): void
    {
        if ($comment->hasParrent) {
            $this->service->deleteAndCallEvent($comment->parrentUser, $comment);
        }
    }

    protected function destroyDeletedParrent($comment): void
    {
        if($comment->comment_id !== null) {
            $parent = Comment::withoutGlobalScope(SoftDeletingScope::class)
                ->withCount('replies')
                ->findOrFail($comment->comment_id);
            if($parent->is_deleted && $parent->replies_count == 0) {
                $parent->forceDelete();
                event(new CommentDeletedEvent($parent));
            }
        }
//        if ($comment->comment?->isDeleted && $comment->comment?->noReplies) {
//            $comment->comment->forceDelete();
//        }
    }
}
