<?php

namespace App\Observers;

use App\Events\ReputationDeletedEvent;
use App\Events\ReputationPutEvent;
use App\Models\Reputation;

class ReputationObserver
{
    public function created(Reputation $reputation): void
    {
        event(new ReputationPutEvent($reputation));
    }

    public function updated(Reputation $reputation): void
    {
        event(new ReputationPutEvent($reputation));
    }

    public function deleted(Reputation $reputation): void
    {
        event(new ReputationDeletedEvent([
            'id' => $reputation->id,
            'reputation_to' => $reputation->reputation_to,
            'isUserOwnReputation' => $reputation->isUserOwnReputation,
        ]));
    }
}
