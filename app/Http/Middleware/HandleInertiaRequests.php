<?php

namespace App\Http\Middleware;

use App\Http\Resources\User\UserResource;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();

        $access_level = 0;

        if ($user) {
            if ($user->isAdmin) {
                $access_level = 2;
            } elseif ($user->isModer) {
                $access_level = 1;
            }
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user ? new UserResource($user) : $user,
                'check' => $user ? true : false,
                'can' => [
                    'create_posts' => $user ? ($user->isCreator || config('karma.chaos_mode')) : false,
                ],
                'access_level' => $access_level,
            ],
            'close_window_token' => null,
            'app_url' => env('APP_URL'),
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
