<?php

namespace App\Listeners;

use App\Services\NotificationService;

class SendCommentUpNotification
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
        $reputation = $event->reputation;

        if (get_class($reputation->reputation_to) == getModel('comment')) {
            if ($reputation->isUp) {
                $this->notifier->sendCommentUpNotification($reputation);
            }
        }
    }
}
