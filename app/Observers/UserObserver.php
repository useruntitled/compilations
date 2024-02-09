<?php

namespace App\Observers;

use App\Jobs\AddUserRoleToNewUserJob;
use App\Models\Role;
use App\Models\User;

class UserObserver
{
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {
        // $user_role = Role::where('role','user')->first();
        // $user->roles()->attach($user_role->id);
        dispatch(new AddUserRoleToNewUserJob($user));
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {

    }

    /**
     * Handle the User "deleted" event.
     */
    public function deleted(User $user): void
    {
        //
    }

    /**
     * Handle the User "restored" event.
     */
    public function restored(User $user): void
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     */
    public function forceDeleted(User $user): void
    {
        //
    }

    public function retrieved(User $user)
    {

        // $user->mergeCasts(['isAdmin' => 'boolean']);
        // $user->isAdmin = $user->isAdmin;
    }
}
