<?php

namespace App\Actions;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UpdateProfileInfo
{
    public static function handle(array $data): User
    {
        $user = Auth::user();

        $user->subsite()->update([
            'description' => $data['description'],
        ]);

        $user->update([
            'name' => $data['name'],
        ]);

        return $user;
    }
}
