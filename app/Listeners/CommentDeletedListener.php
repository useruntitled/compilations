<?php

namespace App\Listeners;

use App\Events\NotificationModified;
use App\Http\Controllers\NotificationController;
use App\Models\Comment;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CommentDeletedListener implements ShouldQueue
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
    public function handle(object $event): void
    {
        $args = $event->args;

        $parrentComment = Comment::find($args['parrent_comment_id']);

        if($parrentComment->deleted_at != null && $parrentComment->replies->count() == 0){
          $parrentComment->forceDelete();
        }

      if($args['author_of_commented_post']->id != $args['author_of_comment']->id){
        NotificationController::deleteNotificationByParam($args['author_of_commented_post']->id,'id',
        $args['id']);
        event(new NotificationModified($args['author_of_commented_post']));
      }
    }
}
