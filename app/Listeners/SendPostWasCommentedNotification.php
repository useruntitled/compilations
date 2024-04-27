<?php

namespace App\Listeners;

use App\Services\NotificationService;

class SendPostWasCommentedNotification
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

        $this->notifier->sendPostWasCommentedNotification($comment);
    }
}
