<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Services\ParserService;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // $posts = Post::query()->latest('id')->limit(20)->where('active',true)->get();
        // return inertia('home/index',[
        //     'posts' => PostResource::collection($posts),
        // ]);
        $posts = Post::query()->with(['user','films' => ['genres']])->latest()->limit(20)->where('active',true)->get();
        $posts->loadCount('comments','films');
        return inertia('home/index',[
            'posts' => $posts,
        ]);
    }
}
