<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Services\PostService;
use Request;

class HomeController extends Controller
{
    public function index(Request $request, PostService $service)
    {
        // $posts = Post::with([
        //     'user' => ['roles'],
        //     'reputation' => function($query) {
        //         $query->where('action', 'up');
        //     },
        //     'films'
        // ])
        // ->withCount(['comments', 'bookmarks', 'films'])
        // ->withCount('reputation')
        // ->orderByDesc('reputation_count')
        // ->orderByDesc('comments_count')
        // ->take(5)
        // ->get();

        $posts = $service->getPopular(1);
        $service->countView($posts);

        return inertia('home/index', [
            'posts' => $posts,
        ]);
    }
}
