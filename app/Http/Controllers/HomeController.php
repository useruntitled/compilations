<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Services\ParserService;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // $posts = Post::query()->latest('id')->limit(20)->where('active',true)->get();
        // return inertia('home/index',[
        //     'posts' => PostResource::collection($posts),
        // ]);


        $posts = Post::query()
            ->with(['user' => ['roles'], 'films' => function (Builder $query) {
                $query->orderBy('id');
            }])
            ->withCount(['comments'])
            ->where('active', true)
            ->latest()
            ->limit(20)
            ->get();
        
       

        // $posts->loadCount('comments','films');
        return inertia('home/index',[
            'posts' => $posts,
        ]);
    }
}
