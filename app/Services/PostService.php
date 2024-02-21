<?php

namespace App\Services;

use App\Jobs\PostCountViewJob;
use App\Jobs\PostCountVisitJob;
use App\Models\Post;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class PostService
{
    protected int $per_page;

    public function __construct()
    {
        $this->per_page = config('post.per_page');
    }

    public function getPopular(?int $page = 1)
    {
//        $posts = Cache::tags('posts')->remember("popular-$page", now()->addMinutes(5), function() use ($page) {
//            return Post::with(['user' => ['roles'], 'films' => ['genres'],
//                'reputation' => function ($query) {
//                    $query->where('action', 'up');
//                },
//            ])
//                ->published()
//                ->withCount(['comments', 'bookmarks', 'reputation', 'films'])
//                ->orderByDesc('reputation_count')
//                ->orderByDesc('comments_count')
//                ->orderByDesc('bookmarks_count')
//                ->skip(($page - 1) * config('post.per_page'))
//                ->take(config('post.per_page'))
//                ->get();
//        });

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

    public function getDrafts(?int $page = 1)
    {
        $drafts = Post::with('films.genres')
            ->withCount('films')
            ->where('user_id', Auth::user()->id)
            ->whereNull('published_at')
            ->whereNull('deleted_at')
            ->latest()
            ->skip($this->per_page * ($page - 1))
            ->take($this->per_page)
            ->get();
        return $drafts;
    }

    public function getNew(?int $page = 1)
    {
        $posts = Post::with(['user' => ['roles'], 'reputation', 'films' => ['genres']])->published()
            ->withCount(['comments', 'bookmarks', 'films'])
            ->latest()
            ->skip(($page - 1) * $this->per_page)
            ->take($this->per_page)
            ->get();

        $result = [];

        for ($i = 0; $i < $posts->count(); $i++) {
            $result[chr(97 + $i)] = $posts[$i];
        }

        return $posts;
    }

    public function getRandom(?int $page = 1, ?int $post_id)
    {
//        $posts = Cache::tags(['posts'])->remember("random-$page", now()->addMinutes(120), function() use ($page, $post_id) {
//            return Post::with(['user' => ['roles'], 'films', 'reputation'])
//                ->published()
//                ->where('id','!=',$post_id)
//                ->withCount(['comments', 'bookmarks', 'films'])
//                ->inRandomOrder()
//                ->skip(($page - 1) * $this->per_page)
//                ->take($this->per_page)
//                ->get();
//        });
        $posts = Post::with(['user' => ['roles'], 'films', 'reputation'])
                ->published()
                ->where('id','!=',$post_id)
                ->withCount(['comments', 'bookmarks', 'films'])
                ->inRandomOrder()
                ->skip(($page - 1) * $this->per_page)
                ->take($this->per_page)
                ->get();

        return $posts;
    }

    public function countView(Collection $posts)
    {
        dispatch(new PostCountViewJob($posts));
    }

    public function countVisit(Post $post)
    {
        dispatch(new PostCountVisitJob($post));
    }
}
