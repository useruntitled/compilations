<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;

class ReputationDeletedEvent implements ShouldQueue
{
    use Dispatchable, InteractsWithSockets;

    public $reputation;

    /**
     * Create a new event instance.
     */
    public function __construct($reputation)
    {
        $this->reputation = $reputation;
    }
}
