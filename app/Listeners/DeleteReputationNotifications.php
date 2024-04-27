<?php

namespace App\Listeners;

use App\Services\NotificationService;

class DeleteReputationNotifications
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

        $this->notifier->deleteAndCallEvent($reputation->reputationToUser, $reputation);
    }
}
