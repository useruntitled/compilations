<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    const PER_PAGE = 10;

    public function index()
    {
        return inertia('Auth/Notifications', [
            'notifications' => $this->getMyNotifications(1),
        ]);
    }

    public function getMyNotifications($page)
    {
        $notifications = Auth::user()->notifications->skip(($page - 1) * self::PER_PAGE)->take(self::PER_PAGE);

        return NotificationResource::collection($notifications);
    }
}
