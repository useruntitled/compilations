<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeclineRequest;
use App\Http\Resources\User\PanelUserResource;
use App\Models\User;
use App\Policies\AdminPolicy;
use App\Traits\UsesFilters;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    use UsesFilters;

    public function index(Request $request)
    {
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
            'user' => PanelUserResource::make($user),
        ]);
    }

    public function addModerRole(Request $request)
    {
        $request->validate(['id' => ['required', 'exists:users']]);

        $user = User::findOrFail($request->id);

        $this->authorize(AdminPolicy::ADD_MODER_ROLE, $user);

        $user->toModer();

        return response()->json('', 201);
    }

    public function removeModerRole(Request $request)
    {
        $request->validate(['id' => ['required', 'exists:users']]);

        $user = User::hasModerRole()->findOrFail($request->id);

        $this->authorize(AdminPolicy::REMOVE_MODER_ROLE, $user);

        $user->unModer();

        return response()->json('', 204);
    }

    public function ban(DeclineRequest $request)
    {
        $user = User::findOrFail($request->id);

        $this->authorize(AdminPolicy::BAN, $user);

        $user->ban($request->reason);
    }

    public function unBan(Request $request)
    {
        $request->validate(['id' => ['required', 'exists:users']]);

        $user = User::findOrFail($request->id);

        $this->authorize(AdminPolicy::UNBAN, $user);

        $user->unBan();

        return response()->json($user, 200);
    }
}
