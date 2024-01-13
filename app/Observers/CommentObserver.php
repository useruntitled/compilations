<?php

namespace App\Observers;

use App\Events\CommentCreatedEvent;
use App\Events\CommentDeletedEvent;
use App\Models\Comment;

class CommentObserver
{
     /**
     * Handle the Post "created" event.
     */
    public function created(Comment $comment): void
    {
        event(new CommentCreatedEvent($comment));
    }

    /**
     * Handle the Post "updated" event.
     */
    public function updated(Comment $comment): void
    {

    }

    /**
     * Handle the Post "deleted" event.
     */
    public function deleted(Comment $comment): void
    {
        event(new CommentDeletedEvent($comment));
    }

    /**
     * Handle the Post "restored" event.
     */
    public function restored(Comment $comment): void
    {
        //
    }

    /**
     * Handle the Post "force deleted" event.
     */
    public function forceDeleted(Comment $comment): void
    {
        event(new CommentDeletedEvent($comment));
    }
    public function retrieved(Comment $comment)
    {
        //
    }
}
