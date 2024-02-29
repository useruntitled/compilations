<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Services\PostService;
use Request;

class HomeController extends Controller
{
    public function index(Request $request, PostService $service)
    {
        $posts = $service->getPopular(1);


        return inertia('Home/Index', [
            'posts' => $posts,
        ]);
    }
}
