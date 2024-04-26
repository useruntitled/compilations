<?php

namespace App\Policies;

use App\Models\User;

class AdminPolicy
{
    const BAN = 'ban';

    const UNBAN = 'unBan';

    const ADD_MODER_ROLE = 'addModerRole';

    const REMOVE_MODER_ROLE = 'removeModerRole';

    public function ban(User $user, User $banAble)
    {
        return $banAble->isUser;
    }

    public function unBan(User $user, User $banAble)
    {
        return $banAble->isUser;
    }

    public function addModerRole(User $user, User $roleAble)
    {
        return $user->isAdmin && !$roleAble->isModer;
    }

    public function removeModerRole(User $user, User $roleAble)
    {
        return $user->isAdmin;
    }
}
