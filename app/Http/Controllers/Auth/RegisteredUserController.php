<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Resources\NotificationResource;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Services\ImageService;
use App\Services\NotificationService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    protected $service;

    public function __construct(NotificationService $service)
    {
        $this->service = $service;
    }

    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterRequest $request, ImageService $service): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::where('email', $request->email)->first();

        if($user) {
            $user->update([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'avatar' => null,
            ]);
        } else {
            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'avatar' => null,
            ]);
            $user->avatar = $service->generateDefaultUserAvatar();
            $user->save();
        }




        // $user_role = Role::where('role','user')->firstOrFail();
        // $user->roles()->attach($user_role->id);

        event(new Registered($user));

//        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }

    public function loginNewUserAfterVerify(Request $request): void
    {
        $request->validate([
           'id' => ['required', 'exists:' . User::class],
        ]);

        $user = User::findOrFail($request->id);
        $user->email_verified_at = now();
        $user->update();
    }

    public function notifications()
    {
        return inertia('Auth/Notifications', [
            'notifications' => NotificationResource::collection(Auth::user()->notifications),
        ]);
    }

    public function updateProfileInfo(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'max:200',
        ]);

        $user = Auth::user();

        $user->name = $request->name;
        $user->description = $request->description;
        $user->update();

        return $user;
    }

    public function uploadAvatar(Request $request, ImageService $service)
    {
        $user = Auth::user();

        if ($request->hasFile('image')) {

            $filename = $service->uploadAndDelete($request->file('image'), $user->avatar);
            $user->avatar = $filename;
            $user->update();

            return $filename;
        }
        abort(422);
    }

    public function uploadBackgroundImage(Request $request, ImageService $service)
    {
        $user = Auth::user();

        if ($request->hasFile('image')) {
            $filename = $service->uploadAndDelete($request->file('image'), $user->background_image);
            $user->background_image = $filename;
            $user->update();

            return $filename;
        }
        abort(422);
    }
}
