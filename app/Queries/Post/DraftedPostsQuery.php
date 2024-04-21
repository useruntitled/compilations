<?php

namespace App\Queries\Post;

use App\Models\Post;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class DraftedPostsQuery
{
    public static function get(int $page): Collection
    {
        return Post::with(['films.genres', 'image', 'user.avatar'])
            ->drafted()
            ->withCount('films')
            ->where('user_id', Auth::user()->id)
            ->skip(($page - 1) * config('post.per_page') * 2)
            ->take(config('post.per_page') * 2)
            ->latest()
            ->get();
    }
}
