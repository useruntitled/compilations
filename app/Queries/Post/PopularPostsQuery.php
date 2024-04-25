<?php

namespace App\Queries\Post;

use App\Models\Post;
use Illuminate\Support\Collection;

final class PopularPostsQuery
{
    public static function get(int $page): Collection
    {
        return Post::with(['userRelation' => ['mediaRelation'], 'filmsRelation' => ['genresRelation'], 'reputationRelation', 'mediaRelation'])
            ->withCount(['commentsRelation', 'bookmarksRelation', 'reputationRelation', 'filmsRelation'])
            ->orderByDesc('reputation_relation_count')
            ->orderByDesc('comments_relation_count')
            ->orderByDesc('bookmarks_relation_count')
            ->skip(($page - 1) * config('post.per_page'))
            ->take(config('post.per_page'))
            ->get();
    }
}
