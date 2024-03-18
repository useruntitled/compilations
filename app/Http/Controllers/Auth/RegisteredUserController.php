<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\UploadFileRequest;
use App\Http\Resources\NotificationResource;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Services\Media\ImageGeneratorService;
use App\Services\Media\MediaService;
use App\Services\NotificationService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    protected NotificationService $service;

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
    public function store(RegisterRequest $request, ImageGeneratorService $service): RedirectResponse
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
            $user->avatar = $service->make();
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

    public function uploadAvatar(UploadFileRequest $request, MediaService $service)
    {

        $user = Auth::user();


        if ($request->hasFile('image')) {

            return json_encode($service->upload($request->file('image'), [
                'object' => 'user',
                'object_id' => $user->id,
            ]));
        }
        abort(422);
    }

    public function uploadCover(UploadFileRequest $request, MediaService $service)
    {
        $user = Auth::user();


        if ($request->hasFile('image')) {

            return json_encode($service->upload($request->file('image'), [
                'object' => 'subsite',
                'object_id' => $user->id,
            ]));
        }
        abort(422);
    }
}
