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
        
    }

    /**
     * Handle the Post "restored" event.
     */
    public function restored(Comment $comment): void
    {

    }

    /**
     * Handle the Post "force deleted" event.
     */
    public function forceDeleted(Comment $comment): void
    {
        event(new CommentDeletedEvent([
            'id' => $comment->id,
            'parrent_comment_id' => $comment->comment->id,
            'author_of_commented_post' => $comment->post->user,
            'author_of_comment' => $comment->user,
        ]));
    }
    public function retrieved(Comment $comment)
    {
        
    }
}
