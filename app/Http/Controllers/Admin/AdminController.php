<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Film;
use App\Models\Genre;
use App\Models\Post;
use App\Models\Report;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return inertia('Admin/Reports/Index', [
            'reports' => Report::with('report_to')->paginate(config('admin.per_page')),
        ]);
    }

    public function admins()
    {
        $admins = User::all();
        $admins = $admins->filter(function ($user) {
            return $user->roles()->where('role', 'admin')->exists();
        });

        return inertia('Admin/Admins/Index', [
            'admins' => $admins,
        ]);
    }

    public function moders()
    {
        $moders = User::all();
        $moders = $moders->filter(function ($user) {
            return $user->roles()->where('role', 'moder')->exists();
        });

        return inertia('Admin/Moders/Index', [
            'admins' => $moders,
        ]);
    }

}
