<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;

class ReputationUpdatedEvent
{
    use Dispatchable, InteractsWithSockets;

    public function __construct(public $reputation)
    {
    }
}
