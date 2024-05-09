<?php

namespace App\Http\Controllers\Auth;

use App\Actions\UpdateProfileInfo;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateProfileInfoRequest;
use App\Http\Requests\UploadFileRequest;
use App\Http\Resources\NotificationResource;
use App\Http\Resources\User\UserResource;
use App\Services\Media\MediaService;
use App\Services\NotificationService;
use Illuminate\Support\Facades\Auth;

class RegisteredUserController extends Controller
{
    protected NotificationService $service;

    public function __construct(NotificationService $service)
    {
        $this->service = $service;
    }

    public function notifications()
    {
        return inertia('Auth/Notifications', [
            'notifications' => NotificationResource::collection(Auth::user()->notifications),
        ]);
    }

    public function updateProfileInfo(UpdateProfileInfoRequest $request)
    {
        return UserResource::make(UpdateProfileInfo::handle([
            'name' => $request->name,
            'description' => $request->description,
        ]));
    }

    public function uploadAvatar(UploadFileRequest $request, MediaService $media)
    {
        return $media->upload($request->file('image'), Auth::user())->toJson();
    }

    public function uploadCover(UploadFileRequest $request, MediaService $media)
    {
        return $media->upload($request->file('image'), Auth::user()->subsiteRelation)->toJson();
    }
}
