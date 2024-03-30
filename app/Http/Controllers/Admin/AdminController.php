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

    public function admins(Request $request)
    {
        $admins = User::Admin()
            ->latest()
            ->when($request->input('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%")
                    ->orWhere('id', 'like', "%$search%");
            })
            ->paginate(config('admin.per_page'))
            ->withQueryString();;

        return inertia('Admin/Admins/Index', [
            'list' => $admins,
            'search' => $request->search,
        ]);
    }

    public function moders(Request $request)
    {
        $admins = User::Moder()
            ->latest()
            ->when($request->input('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%");
            })
            ->paginate(config('admin.per_page'))
            ->withQueryString();;

        return inertia('Admin/Admins/Index', [
            'list' => $admins,
            'search' => $request->search,
        ]);
    }

}
