<?php

namespace App\Listeners;

use App\Services\NotificationService;

class DeleteReplyNotifications
{
    /**
     * Create the event listener.
     */
    public function __construct(protected NotificationService $notifier)
    {
    }

    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
        $comment = $event->comment;

        $this->notifier->deleteAndCallEvent($comment->postUser, $comment);
        if ($comment->parrentUser != null) {
            $this->notifier->deleteAndCallEvent($comment->parrentUser, $comment);
        }
    }
}
