<?php

namespace App\Listeners;

use App\Events\CommentCreatedEvent;
use App\Jobs\SendNotificationAndCallEvent;
use App\Jobs\SendPostWasCommentedNotificationJob;
use App\Jobs\SendReplyNotificationJob;
use App\Notifications\PostWasCommentedNotification;
use App\Notifications\ReplyNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CommentCreatedListener implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(CommentCreatedEvent $event): void
    {
        $comment = $event->comment;

        dispatch(new SendReplyNotificationJob($comment));
        dispatch(new SendPostWasCommentedNotificationJob($comment));
    }
}
