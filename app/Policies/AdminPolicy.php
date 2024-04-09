<?php

namespace App\Policies;

use App\Models\User;

class AdminPolicy
{
    const BAN = 'ban';

    public function ban(User $user, User $banable)
    {
        return $banable->isUser;
    }
}
