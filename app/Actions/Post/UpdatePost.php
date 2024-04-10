<?php

namespace App\Actions\Post;

use App\Models\Post;
use Illuminate\Support\Str;

class UpdatePost
{
    public static function handle(Post $post, array $data): Post
    {
        $films = $data['films'] ?? null;

        if ($films != null && count($films) > 0) {
            if (count($post->films) > 0) {
                $post->films()->detach();
            }

            $arrayOfIds = [];
            foreach ($films as $film) {
                $arrayOfIds[] = $film['id'];
            }

            $post->films()->attach(array_unique($arrayOfIds));
        }

        $post->update([
            'title' => $data['title'],
            'description' => nl2br($data['description']),
            'slug' => Str::slug($data['title']),
        ]);

        $post->save();

        return $post;
    }
}
