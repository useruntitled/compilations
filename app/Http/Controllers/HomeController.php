<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $posts = Post::query()->latest('id')->limit(20)->where('active',true)->get();
        $posts->each(function($post) {
            $post->loadCount('films');
            $post->load('tags');
        });
        return inertia('home/index',[
            'posts' => PostResource::collection($posts),
        ]);
    }
}
