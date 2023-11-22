<?php

namespace App\Observers;

use App\Http\Controllers\KarmaController;
use App\Models\CommentReputation;

class CommentReputationObserver
{
    /**
     * Handle the CommentReputation "created" event.
     */
    public function created(CommentReputation $commentReputation): void
    {
        KarmaController::canPost($commentReputation->replyToUser);
    }

    /**
     * Handle the CommentReputation "updated" event.
     */
    public function updated(CommentReputation $commentReputation): void
    {
        KarmaController::canPost($commentReputation->replyToUser);
    }

    /**
     * Handle the CommentReputation "deleted" event.
     */
    public function deleted(CommentReputation $commentReputation): void
    {
        KarmaController::canPost($commentReputation->replyToUser);
    }

    /**
     * Handle the CommentReputation "restored" event.
     */
    public function restored(CommentReputation $commentReputation): void
    {
        //
    }

    /**
     * Handle the CommentReputation "force deleted" event.
     */
    public function forceDeleted(CommentReputation $commentReputation): void
    {
        //
    }
}
