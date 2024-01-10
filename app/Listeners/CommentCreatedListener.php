<?php

namespace App\Listeners;

use App\Events\CommentCreatedEvent;
use App\Events\NotificationModified;
use App\Http\Controllers\NotificationController;
use App\Notifications\CrutchNotification;
use App\Notifications\PostWasCommentedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

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

        // $result = NotificationController::prepareNotificationPostWasCommented($comment);
        if($comment->post->user->id != $comment->user->id){
            Notification::send($comment->post->user,new PostWasCommentedNotification($comment));
            event(new NotificationModified($comment->post->user->id));
        }
    }
}
