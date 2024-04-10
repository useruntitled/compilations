<?php

namespace App\Actions\Post;

use App\Models\Post;

class PublishPost
{
    public static function handle(Post $post): void
    {
        if (! $post->isActive) {
            if ($post->title != null && $post->films()->count() > 0) {
                if (! $post->published_at) {
                    $post->published_at = now();
                }
                $post->save();
            } else {
                abort(422);
            }
        }
    }
}
