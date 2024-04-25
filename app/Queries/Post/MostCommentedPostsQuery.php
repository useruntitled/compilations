<?php

namespace App\Queries\Post;

use App\Models\Post;
use Illuminate\Support\Collection;

final class MostCommentedPostsQuery
{
    public static function get(int $page): Collection
    {
        return Post::withCount(['commentsRelation'])
            ->orderByDesc('comments_relation_count')
            ->skip(($page - 1) * config('post.per_page') * 2)
            ->take(config('post.per_page') * 2)
            ->get();
    }
}
