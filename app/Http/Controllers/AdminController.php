<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Film;
use App\Models\Genre;
use App\Models\Post;
use App\Models\Report;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return inertia('Admin/Index', [
            'reports' => Report::with('report_to.user')->get(),
        ]);
    }

    public function genres()
    {
        $genres = Genre::all();

        return inertia('Admin/Genres', [
            'genres' => $genres,
        ]);
    }

    public function films($page = null)
    {
        $page == null || $page == 1 ? $page = 0 : '';
        $films = Film::orderBy('id', 'desc')->skip($page)->paginate(10);
        foreach ($films as $film) {
            $film->load('genres');
        }

        return inertia('Admin/Films', [
            'films' => $films,
        ]);
    }

    public function users()
    {
        $users = User::with('roles')->get();

        return inertia('Admin/Users', [
            'users' => $users,
        ]);
    }

    public function admins()
    {
        $admins = User::all();
        $admins = $admins->filter(function ($user) {
            return $user->roles()->where('role', 'admin')->exists();
        });

        return inertia('Admin/Admins', [
            'admins' => $admins,
        ]);
    }

    public function moders()
    {
        $moders = User::all();
        $moders = $moders->filter(function ($user) {
            return $user->roles()->where('role', 'moder')->exists();
        });

        return inertia('Admin/Moders', [
            'admins' => $moders,
        ]);
    }

    public function posts()
    {
        $posts = Post::where('active', true)->get();

        return inertia('Admin/Posts', [
            'posts' => PostResource::collection($posts),
        ]);
    }

    public function ban(Request $request)
    {
        $user = User::find($request->id);
        $user->banned_at = now();
        $user->update();
        return true;
    }

    public function deletePost(Request $request)
    {
        $post = Post::findOrFail($request->id);
        $post->forceDelete();
        $reports = Report::where('report_to_id', '=', $post->id)->where('report_to_type','=','App\\Models\\Post')->get();
        foreach($reports as $report) {$report->delete();}

        return 204;
    }

    public function viewObjectCreator($id)
    {
        $user = User::with('posts')->findOrFail($id);
        return inertia('Admin/ObjectCreator', [
           'user' => $user,
        ]);
    }

    public function viewObject($id)
    {
        $object = Report::findOrFail($id);
        return inertia('Admin/Object', [
            'report_to' => $object->report_to,
            'report' => $object,
        ]);
    }
}
