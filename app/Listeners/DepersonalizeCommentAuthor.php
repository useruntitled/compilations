<?php

namespace App\Listeners;

use App\Enums\UserRole;
use App\Models\User;

class DepersonalizeCommentAuthor
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
        $comment = $event->comment;

        $comment->update([
            'user_id' => User::whereHas('rolesRelation', function ($builder) {
                $builder->where('name', UserRole::SERVICE_DELETED_ACCOUNT);
            })->firstOrFail()->id,
        ]);
    }
}
