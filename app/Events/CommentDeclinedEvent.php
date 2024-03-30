<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;

class CommentDeclinedEvent
{
    use Dispatchable, InteractsWithSockets;

    public $comment;

    public function __construct($comment)
    {
        $this->comment = $comment;
    }
}
