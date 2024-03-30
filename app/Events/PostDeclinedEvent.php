<?php

namespace App\Events;

use Illuminate\Foundation\Events\Dispatchable;

class PostDeclinedEvent
{
    use Dispatchable;

    public $post;

    public function __construct($post)
    {
        $this->post = $post;
    }
}
