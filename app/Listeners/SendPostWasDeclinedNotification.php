<?php

namespace App\Listeners;

use App\Services\NotificationService;

class SendPostWasDeclinedNotification
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
        $post = $event->post;

        $this->notifier->sendPostWasDeclinedNotification($post);
    }
}
