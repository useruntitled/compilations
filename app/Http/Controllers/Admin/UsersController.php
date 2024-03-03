<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        $page = $request->page;

        $users = User::with('roles')
            ->latest()
            ->paginate(config('admin.per_page'));

        return inertia('Admin/Users/Index', [
            'users' => $users,
        ]);
    }

    public function view($id)
    {
        $user = User::findOrFail($id);
        return inertia('Admin/Users/View', [
            'user' => $user,
        ]);
    }

    public function toggleModer(Request $request)
    {
        $user = User::findOrFail($request->id);
        $moder_role = Role::where('role', '=', 'moder')->firstOrFail();
        if (!$user->roles()->exists($moder_role->id)) {
            $user->roles()->attach($moder_role);
            $user->save();

        } else {
            $user->roles()->detach($moder_role->id);
            $user->save();
        }
    }

    public function ban(Request $request)
    {
        $user = User::find($request->id);
        $user->banned_at = now();
        $user->banned_by = Auth::id();
        $user->banned_reason = $request->reason;
        $user->update();
    }
}
