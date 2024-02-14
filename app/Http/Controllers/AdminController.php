<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Film;
use App\Models\Genre;
use App\Models\Post;
use App\Models\Report;
use App\Models\Tag;
use App\Models\User;

class AdminController extends Controller
{
    public function index()
    {
        return inertia('Admin/Index', [
            'reports' => Report::all(),
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
        $users = User::all();
        $users = $users->filter(function ($user) {
            return ! $user->roles()->where('role', 'admin')->exists();
        });

        return inertia('Admin/Users', [
            'users' => $users->load('roles'),
        ]);
    }

    public function admins()
    {
        $admins = User::all();
        $admins = $admins->filter(function ($user) {
            return $user->roles()->where('role', 'admin')->exists();
        });

        return inertia('Admin/Admins', [
            'admins' => $admins->load('roles'),
        ]);
    }

    public function posts()
    {
        $posts = Post::where('active', true)->get();

        return inertia('Admin/Posts', [
            'posts' => PostResource::collection($posts),
        ]);
    }

    public function tags()
    {
        $tags = Tag::all();

        return inertia('Admin/Tags', [
            'tags' => $tags,
        ]);
    }
}
