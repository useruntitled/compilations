<?php

namespace App\Actions\Post;

class PublishPost
{
    public static function fromRequest($post, $request)
    {
        if (!$post->isActive) {
            if ($post->title != null && $post->films()->count() > 0) {
                if (!$post->published_at) $post->published_at = now();
                $post->save();
            } else {
                abort(422);
            }
        }
    }
}
