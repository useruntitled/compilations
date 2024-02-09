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
        $posts = Post::with(['user' => ['roles'], 'films' => ['genres'],
            'reputation' => function ($query) {
                $query->where('action', 'up');
            },
        ])
            ->published()
            ->withCount(['comments', 'bookmarks', 'reputation', 'films'])
            ->orderByDesc('reputation_count')
            ->orderByDesc('comments_count')
            ->orderByDesc('bookmarks_count')
            ->skip(($page - 1) * config('post.per_page'))
            ->take(config('post.per_page'))
            ->get();

        return $posts;
    }
}
