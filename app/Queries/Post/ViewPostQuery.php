<?php

namespace App\Queries\Post;

use App\Models\Post;

final class ViewPostQuery
{
    public static function get(int $id): Post
    {
        return Post::with([
            'userRelation',
            'filmsRelation' => ['genresRelation'],
            'mediaRelation',
        ])
            ->withCount(['commentsRelation', 'bookmarksRelation'])
            ->findOrFail($id);
    }
}
