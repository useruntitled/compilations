<?php

namespace App\Http\Controllers;

use App\Models\Post;

class HomeController extends Controller
{
    public function index()
    {
        // $posts = Post::query()->latest('id')->limit(20)->where('active',true)->get();
        // return inertia('home/index',[
        //     'posts' => PostResource::collection($posts),
        // ]);


        $posts = Post::query()
            ->with(['user' => ['roles'], 'films' => ['genres']])
            ->withCount(['comments', 'reputation'])
            ->where('active', true)
            ->latest()
            ->limit(5)
            ->get();
        
       

        // $posts->loadCount('comments','films');
        return inertia('home/index',[
            'posts' => $posts,
        ]);
    }
}
