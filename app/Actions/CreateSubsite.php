<?php

namespace App\Actions;

use App\Models\Subsite;
use App\Models\User;

class CreateSubsite
{
    public static function handle(User $user): void
    {
        Subsite::create([
            'user_id' => $user->id,
        ]);
    }
}
