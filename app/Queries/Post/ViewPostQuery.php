<?php

namespace App\Queries\Post;

use App\Models\Post;

class ViewPostQuery
{
    public static function get(int $id): Post
    {
        return Post::with([
            'userRelation',
            'filmsRelation' => ['genresRelation'],
            'imageRelation',
        ])
            ->withCount(['commentsRelation', 'bookmarksRelation'])
            ->findOrFail($id);
    }
}
