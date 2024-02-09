<?php

namespace App\Listeners;

use App\Events\ReputationDeletedEvent;
use App\Services\KarmaService;
use App\Services\NotificationService;
use Illuminate\Contracts\Queue\ShouldQueue;

class ReputationDeletedListener implements ShouldQueue
{
    protected $notifier;

    protected $karmaService;

    /**
     * Create the event listener.
     */
    public function __construct(NotificationService $notifier, KarmaService $karmaService)
    {
        $this->notifier = $notifier;
        $this->karmaService = $karmaService;
    }

    /**
     * Handle the event.
     */
    public function handle(ReputationDeletedEvent $event): void
    {
        $reputation = $event->reputation;

        if (! $reputation->RepToUserIsOwner) {
            $this->notifier->deleteAndCallEvent($reputation->reputationToUser, $reputation);

            $this->karmaService->handleCreatorRole($reputation->reputation_to->user);
        }
    }
}
