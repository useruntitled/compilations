<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index()
    {
        // view for mobile
    }

    public function search(string $query)
    {
        $posts = Post::where('title', 'like',"%$query%")->take(5)->get();
        $users = User::where('name', 'like', "%$query%")->take(5)->get();
        return response()->json([
           'posts' => $posts,
           'users' => $users,
        ]);
    }
}
