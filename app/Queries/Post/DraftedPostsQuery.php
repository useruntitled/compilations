<?php

namespace App\Queries\Post;

use App\Models\Post;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

final class DraftedPostsQuery
{
    public static function get(int $page): Collection
    {
        return Post::with(['filmsRelation.genresRelation', 'mediaRelation', 'userRelation.mediaRelation'])
            ->drafted()
            ->withCount('filmsRelation')
            ->where('user_id', Auth::user()->id)
            ->skip(($page - 1) * config('post.per_page') * 2)
            ->take(config('post.per_page') * 2)
            ->latest()
            ->get();
    }
}
