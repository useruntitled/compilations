<?php

namespace App\Observers;

use App\Events\ReplyCreatedEvent;
use App\Events\ReplyDeletedEvent;
use App\Models\Reply;

class ReplyObserver
{
    /**
     * Handle the Post "created" event.
     */
    public function created(Reply $reply): void
    {
        event(new ReplyCreatedEvent($reply));
    }

    /**
     * Handle the Post "updated" event.
     */
    public function updated(Reply $reply): void
    {

    }

    /**
     * Handle the Post "deleted" event.
     */
    public function deleted(Reply $reply): void
    {
        event(new ReplyDeletedEvent([
            'id' => $reply->id,
            'author_of_commented_post' => $reply->replyTo->user,
            'author_of_comment' => $reply->user,
        ]));
    }

    /**
     * Handle the Post "restored" event.
     */
    public function restored(Reply $reply): void
    {

    }

    /**
     * Handle the Post "force deleted" event.
     */
    public function forceDeleted(Reply $reply): void
    {

    }
    public function retrieved(Reply $reply)
    {
        
    }
}
