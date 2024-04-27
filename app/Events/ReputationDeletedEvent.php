<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;

class ReputationDeletedEvent implements ShouldQueue
{
    use Dispatchable, InteractsWithSockets;

    public function __construct(public $reputation)
    {
    }
}
