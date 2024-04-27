<?php

namespace App\Listeners;

use App\Services\NotificationService;

class UpdateReputationNotifications
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

        if ($reputation->action == 'up') {
            if (get_class($reputation->reputation_to) == getModel('post')) {
                $this->notifier->sendPostUpNotification($reputation);
            } else {
                $this->notifier->sendCommentUpNotification($reputation);
            }
        } else {
            $this->notifier->deleteAndCallEvent($reputation->reputationToUser, $reputation);
        }
    }
}
