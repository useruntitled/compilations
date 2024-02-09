<?php

namespace App\Listeners;

use App\Services\NotificationService;
use Illuminate\Contracts\Queue\ShouldQueue;

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

    protected function deletePostWasCommentedNotification($comment)
    {
        $this->service->deleteAndCallEvent($comment->postUser, $comment);
    }

    protected function deleteReplyNotification($comment)
    {
        if ($comment->hasParrent) {
            $this->service->deleteAndCallEvent($comment->parrentUser, $comment);
        }
    }

    protected function destroyDeletedParrent($comment)
    {
        if ($comment->comment?->isDeleted && $comment->comment?->noReplies) {
            $comment->comment->forceDelete();
        }
    }
}
