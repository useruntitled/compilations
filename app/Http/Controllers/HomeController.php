<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Contracts\Database\Eloquent\Builder;
class HomeController extends Controller
{
    public function index()
    {
        // $posts = Post::query()->latest('id')->limit(20)->where('active',true)->get();
        // return inertia('home/index',[
        //     'posts' => PostResource::collection($posts),
        // ]);


        $posts = Post::with(['user' => ['roles'],
            'reputation' => function(Builder $query) {
                $query->where('action', 'up');
            },
            'films'
        ])
            ->withCount(['comments', 'bookmarks', 'films'])
            ->withCount('reputation')
            ->orderByDesc('reputation_count')
            ->orderByDesc('comments_count')
            ->take(5)
            ->get(); 
        
       

        // $posts->loadCount('comments','films');
        return inertia('home/index',[
            'posts' => $posts,
        ]);
    }
}
