<?php

namespace App\Listeners;

use App\Events\NotificationModified;
use App\Http\Controllers\NotificationController;
use App\Jobs\DeleteNotificationAndCallEventJob;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class CommentDeletedListener implements ShouldQueue
{


    /**
     * Create the event listener.
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
      
      $comment = $event->comment;

      
      $this->deletePostWasCommentedNotification($comment);
      $this->deleteReplyNotification($comment);
      

      // Transaction or something needed here
      $this->destroyDeletedParrent($comment);
    }

    protected function deletePostWasCommentedNotification($comment)
    {
      dispatch(
        new DeleteNotificationAndCallEventJob($comment->postUser, $comment)
      );
    }

    protected function deleteReplyNotification($comment)
    {
      if($comment->hasParrent){
        dispatch(
          new DeleteNotificationAndCallEventJob($comment->parrentUser, $comment)
        );
      }
    }

    protected function destroyDeletedParrent($comment)
    {
      if($comment->comment?->isDeleted && $comment->comment?->noReplies)
      {
        $comment->comment->forceDelete();
      }
    }
}
