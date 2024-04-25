<?php

namespace App\Queries\Post;

use App\Models\Post;
use Illuminate\Support\Collection;

final class RandomPostsQuery
{
    public static function get(int $page, int $postId): Collection
    {
        return Post::with(['userRelation' => ['rolesRelation'], 'filmsRelation', 'reputationRelation'])
            ->whereNot('id', $postId)
            ->withCount(['commentsRelation', 'bookmarksRelation', 'filmsRelation'])
            ->inRandomOrder()
            ->skip(($page - 1) * config('post.per_page') * 2)
            ->take(config('post.per_page') * 2)
            ->get();
    }
}
