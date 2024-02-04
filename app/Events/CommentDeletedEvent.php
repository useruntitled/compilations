<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;

class CommentDeletedEvent implements ShouldQueue
{
    use Dispatchable, InteractsWithSockets;

    public $comment;

    /**
     * Create a new event instance.
     */
    public function __construct($comment)
    {
        $this->comment = $comment;
    }
}
