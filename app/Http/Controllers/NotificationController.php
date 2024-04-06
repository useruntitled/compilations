<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    const PER_PAGE = 5;

    public function index()
    {
        return inertia('Auth/Notifications', [
            'notifications' => $this->getMyNotifications(1),
        ]);
    }

    public function getMyNotifications(?int $page = 1)
    {
        $notifications = Auth::user()->notifications->skip(($page - 1) * self::PER_PAGE)->take(self::PER_PAGE);

        return NotificationResource::collection($notifications);
    }

    public function read()
    {
        Auth::user()->unreadNotifications->markAsRead();
    }
}
