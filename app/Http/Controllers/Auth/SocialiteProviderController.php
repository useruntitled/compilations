<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\Media\ImageGeneratorService;
use App\Services\Media\ImageParserService;
use App\Services\Media\MediaUploader;
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

    public function callback($provider, ImageParserService $avatarParser)
    {
        $socialiteUser = Socialite::driver($provider)->user();


        $user = User::where([
            'provider' => $provider,
            'provider_user_id' => $socialiteUser->getId(),
        ])->first();



        if(!$user) {
            $hasImage = true;

            $user = User::create([
                'name' => $socialiteUser->getName(),
                'email' => $socialiteUser->getEmail(),
                'username' => $socialiteUser->getNickname(),
                'provider' => $provider,
                'provider_user_id' => $socialiteUser->getId(),
                'password' => Hash::make(Str::random(20)),
                'email_verified_at' => now(),
            ]);
            if ($hasImage) {
                $avatar = $avatarParser->get($socialiteUser->getAvatar());
                MediaUploader::upload($avatar, [
                    'object' => 'user',
                    'object_id' => $user->id,
                ]);
            } else {
                $user->generateAvatar();
            }
            $user->update();
        }

        Auth::login($user);

        $close_window_token = Str::random(10);

        Inertia::share('close_window_token', $close_window_token);
        return inertia('Home/Index', [
            'close_window_token' => $close_window_token,
        ]);
    }
}
