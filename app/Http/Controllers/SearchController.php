<?php

namespace App\Http\Controllers;

use App\Http\Resources\Post\ShortPostFeedResource;
use App\Http\Resources\User\CompressedUserResource;
use App\Models\Post;
use App\Models\User;

class SearchController extends Controller
{
    public function index()
    {
        return inertia('Search');
    }

    public function search(string $query)
    {
        $posts = Post::where('title', 'like', "%$query%")->take(5)->get();
        $users = User::where('name', 'like', "%$query%")->take(5)->get();

        return response()->json([
            'posts' => ShortPostFeedResource::collection($posts),
            'users' => CompressedUserResource::collection($users),
        ]);
    }
}
