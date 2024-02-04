<?php

namespace App\Services;

use App\Models\Post;

class PostService
{
    public function __construct()
    {
        //
    }

    public function getPopular($page)
    {
        $posts = Post::with(['user' => ['roles'],
            'films' => function ($query) {
                $query->take(3);
            },
            'reputation' => function ($query) {
                $query->where('action', 'up');
            },
        ])
            ->published()
            ->withCount(['comments', 'bookmarks', 'reputation'])
            ->orderByDesc('reputation_count')
            ->orderByDesc('comments_count')
            ->orderByDesc('bookmarks_count')
            ->skip(($page - 1) * config('app')['posts.per.page'])
            ->take(config('app')['posts.per.page'])
            ->get();

        return $posts;
    }
}
