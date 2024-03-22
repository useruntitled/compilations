<?php

namespace App\Policies;

use App\Models\Comment;
use App\Models\User;

class CommentPolicy
{
    const UPDATE = 'update';

    const DELETE = 'delete';

    public function update(User $user, Comment $post): bool
    {
        return $post->isAuthoredBy($user);
    }

    public function delete(User $user, Comment $post): bool
    {
        return $post->isAuthoredBy($user);
    }
}
