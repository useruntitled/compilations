<?php

namespace App\Actions;

use App\Models\Subsite;

class AddSubsiteAction
{
    public static function handle($user)
    {
        Subsite::create([
            'user_id' => $user->id,
        ]);
    }
}
