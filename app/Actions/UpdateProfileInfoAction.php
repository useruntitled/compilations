<?php

namespace App\Actions;

use Illuminate\Support\Facades\Auth;

class UpdateProfileInfoAction
{
    public static function handle($attributes)
    {
        $user = Auth::user();

        $user->subsite()->update([
            'description' => $attributes['description'],
        ]);

        $user->update([
            'name' => $attributes['name'],
        ]);

        return $user;
    }
}
