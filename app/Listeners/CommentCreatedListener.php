<?php

namespace App\Listeners;

use App\Events\CommentCreatedEvent;
use App\Services\NotificationService;
use Illuminate\Contracts\Queue\ShouldQueue;

class CommentCreatedListener implements ShouldQueue
{
    protected $service;

    /**
     * Create the event listener.
     */
    public function __construct(NotificationService $service)
    {
        $this->service = $service;
    }

    /**
     * Handle the event.
     */
    public function handle(CommentCreatedEvent $event): void
    {
        $comment = $event->comment;

        $this->service->sendReplyNotification($comment);
        $this->service->sendPostWasCommentedNotification($comment);
    }
}
