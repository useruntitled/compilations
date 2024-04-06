<?php

namespace App\Http\Controllers;

use App\Services\PostService;
use Request;

class HomeController extends Controller
{
    public function index(Request $request, PostService $service)
    {
        $posts = $service->getPopular(1);
        $mostCommentedPosts = $service->getMostCommented();

        return inertia('Home/Index', [
            'posts' => $posts,
            'most_commented_posts' => $mostCommentedPosts,
        ]);
    }
}
