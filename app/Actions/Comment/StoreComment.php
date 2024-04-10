<?php

namespace App\Actions\Comment;

use App\Models\Comment;
use App\Services\Media\MediaUploader;
use Illuminate\Support\Facades\Auth;

final class StoreComment
{
    public static function handle(array $data): Comment
    {
        if (isset($data['comment_id'])) {
            $comment = Comment::find($data['comment_id']);

            $level = $comment->level + 1;
        } else {
            $level = 0;
        }

        $comment = Comment::create([
            'post_id' => $data['post_id'],
            'comment_id' => $data['comment_id'] ?? null,
            'text' => preg_replace('/(<div><br><\/div>\s*)+$/', '', $data['text']),
            'level' => $level,
            'user_id' => Auth::user()->id,
        ]);

        if (isset($data['image'])) {
            MediaUploader::toEloquent($data['image']['href'], $comment);
        }

        return $comment;
    }
}
