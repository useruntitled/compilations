<?php

namespace App\Actions\Post;

use Illuminate\Support\Str;

class UpdatePost
{
    public static function fromRequest($post, $request)
    {
        $films = $request->films;

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
            'title' => $request->title,
            'description' => nl2br($request->description),
            'slug' => Str::slug($request->title),
        ]);
        $post->save();
        return $post;
    }
}
