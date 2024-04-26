<?php

namespace App\Policies;

use App\Models\Reputation;
use App\Models\User;

class ReputationPolicy
{
    const UPDATE = 'update';

    const DELETE = 'delete';

    public function update(User $user, Reputation $reputation): bool
    {
        return $reputation->isAuthoredBy($user);
    }

    public function delete(User $user, Reputation $reputation): bool
    {
        return $reputation->isAuthoredBy($user);
    }
}
