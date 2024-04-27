<?php

namespace App\Observers;

use App\Events\ReputationCreatedEvent;
use App\Events\ReputationDeletedEvent;
use App\Events\ReputationUpdatedEvent;
use App\Models\Reputation;

class ReputationObserver
{
    public function created(Reputation $reputation): void
    {
        event(new ReputationCreatedEvent($reputation));
    }

    public function updated(Reputation $reputation): void
    {
        event(new ReputationUpdatedEvent($reputation));
    }

    public function deleted(Reputation $reputation): void
    {
        event(new ReputationDeletedEvent($reputation));
    }
}
