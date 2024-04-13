<?php

namespace App\Services;

use App\Http\Resources\PostFeedResource;
use App\Http\Resources\ShortPostFeedResource;
use App\Jobs\PostIncrementViewJob;
use App\Jobs\PostIncrementVisitJob;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class PostService
{
    protected int $per_page;

    public function __construct()
    {
        $this->per_page = config('post.per_page');
    }

    public function getPopular(?int $page = 1)
    {
        $posts = Post::with(['user' => ['roles'], 'films' => ['genres'], 'reputationRelation'])
            ->withCount(['comments', 'bookmarks', 'reputationRelation', 'films'])
            ->orderByDesc('reputation_relation_count')
            ->orderByDesc('comments_count')
            ->orderByDesc('bookmarks_count')
            ->skip(($page - 1) * config('post.per_page'))
            ->take(config('post.per_page'))
            ->get();
        $this->incrementView($posts);

        return PostFeedResource::collection($posts);
    }

    public function getMostCommented(?int $page = 1)
    {
        $posts = Post::withCount(['comments'])
            ->orderByDesc('comments_count')
            ->skip(($page - 1) * config('post.per_page') * 2)
            ->take(config('post.per_page') * 2)
            ->get();

        return ShortPostFeedResource::collection($posts);
    }

    public function getDrafts(?int $page = 1)
    {
        $drafts = Post::with(['films.genres', 'image', 'user.avatar'])
            ->drafted()
            ->withCount('films')
            ->where('user_id', Auth::user()->id)
            ->skip($this->per_page * ($page - 1))
            ->take($this->per_page)
            ->latest()
            ->get();

        return $drafts;
    }

    public function getNew(?int $page = 1)
    {
        $posts = Post::with(['user' => ['roles'], 'reputationRelation', 'films' => ['genres'], 'image'])
            ->withCount(['comments', 'bookmarks', 'films'])
            ->latest('published_at')
            ->skip(($page - 1) * $this->per_page)
            ->take($this->per_page)
            ->get();

        $this->incrementView($posts);

        return PostFeedResource::collection($posts);
    }

    public function getRandom(?int $page, ?int $post_id)
    {
        $posts = Post::with(['user' => ['roles'], 'films', 'reputationRelation'])
            ->where('id', '!=', $post_id)
            ->withCount(['comments', 'bookmarks', 'films'])
            ->inRandomOrder()
            ->skip(($page - 1) * $this->per_page)
            ->take($this->per_page)
            ->get();
        $this->incrementView($posts);

        return PostFeedResource::collection($posts);
    }

    public function incrementView($posts): void
    {
        dispatch(new PostIncrementViewJob($posts));
    }

    public function incrementVisit(Post $post): void
    {
        dispatch(new PostIncrementVisitJob($post));
    }
}
