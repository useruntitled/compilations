<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Policies\AdminPolicy;
use App\Traits\UsesFilters;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    use UsesFilters;

    public function index(Request $request)
    {

        $page = $request->page;

        $users = User::with('rolesRelation')
            ->latest()
            ->when($request->input('search'), function ($query, $search) {
                $query->where('name', 'like', "%$search%")
                    ->orWhere('id', 'like', "%$search%");
            });
        $users = $this->setFilter($users)
            ->paginate(config('admin.per_page'))
            ->withQueryString();

        return inertia('Admin/Users/Index', [
            'list' => $users,
            'search' => $request->search,
        ]);
    }

    public function view($id)
    {
        $user = User::with('bannedByUser')->findOrFail($id);

        return inertia('Admin/Users/View', [
            'user' => $user,
        ]);
    }

    public function toggleModer(Request $request)
    {
        $user = User::findOrFail($request->id);

        if (! $user->isModer) {
            $user->toModer();
        } else {
            $user->unModer();
        }
    }

    public function toggleBan(Request $request)
    {
        $user = User::findOrFail($request->id);

        $this->authorize(AdminPolicy::BAN, $user);

        if ($user->isBanned) {
            $user->unBan();
        } else {
            $user->ban($request->reason);
        }
    }
}
