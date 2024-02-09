<?php

namespace App\Observers;

use App\Models\Post;

class PostObserver
{
    /**
     * Handle the Post "created" event.
     */
    public function created(Post $post): void
    {
        //
        // $post->reputation = $post->getReputation();
    }

    /**
     * Handle the Post "updated" event.
     */
    public function updated(Post $post): void
    {
        //
        // $post->reputation = $post->getReputation();
    }

    /**
     * Handle the Post "deleted" event.
     */
    public function deleted(Post $post): void
    {
        //
        // $post->reputation = $post->getReputation();
    }

    /**
     * Handle the Post "restored" event.
     */
    public function restored(Post $post): void
    {
        //
        // $post->reputation = $post->getReputation();
    }

    /**
     * Handle the Post "force deleted" event.
     */
    public function forceDeleted(Post $post): void
    {
        //
        // $post->reputation = $post->getReputation();
    }

    public function retrieved(Post $post)
    {
        // $user->isAdmin = $user->isAdmin();
        // $post->reputation = $post->getReputation();

    }
}
