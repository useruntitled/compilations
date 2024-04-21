<?php

namespace App\Queries\Post;

use App\Models\Post;
use Illuminate\Support\Collection;

class NewPostsQuery
{
    public static function get(int $page): Collection
    {
        return Post::with([
            'userRelation',
            'reputationRelation',
            'filmsRelation' => ['genresRelation'],
            'imageRelation',
        ])
            ->withCount(['commentsRelation', 'bookmarksRelation', 'filmsRelation'])
            ->latest('published_at')
            ->skip(($page - 1) * config('post.per_page') * 2)
            ->take(config('post.per_page') * 2)
            ->get();
    }
}