<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class SocialiteProviderController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider, ImageService $service)
    {
        $socialiteUser = Socialite::driver($provider)->user();

        if(User::where('email', $socialiteUser->getEmail())->exists()) {
            if(!empty($socialiteUser->getEmail())) return redirect()->route('home');
        }


        $user = User::where([
            'provider' => $provider,
            'provider_user_id' => $socialiteUser->getId(),
        ])->first();



        if(!$user) {
            $hasImage = !$socialiteUser->user['is_avatar_empty'];

            if($hasImage) {
                $filename = $service->parseProviderUserAvatar($socialiteUser->getAvatar());
            }

            $user = User::create([
                'name' => $socialiteUser->user['display_name'],
                'email' => $socialiteUser->getEmail(),
                'username' => $socialiteUser->getNickname(),
                'avatar' => $hasImage ? $filename : null,
                'provider' => $provider,
                'provider_user_id' => $socialiteUser->getId(),
                'password' => Hash::make(Str::random(20)),
            ]);
            if(!$hasImage) {
                $user->avatar = $service->generateDefaultUserAvatar();
            }
            $user->update();
        }

        Auth::login($user);

        $close_window_token = Str::random(10);

        Inertia::share('close_window_token', $close_window_token);
        return inertia('home/index', [
            'close_window_token' => $close_window_token,
        ]);
    }
}
