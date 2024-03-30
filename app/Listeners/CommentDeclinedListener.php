<?php

namespace App\Listeners;

use App\Services\NotificationService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CommentDeclinedListener implements ShouldQueue
{
    protected $notifier;

    public function __construct(NotificationService $notifier)
    {
        $this->notifier = $notifier;
    }

    public function handle(object $event): void
    {
        $comment = $event->comment;

        $this->notifier->sendCommentWasDeclinedNotification($comment);
    }
}
