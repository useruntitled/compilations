<?php

namespace App\Actions\Comment;

use App\Models\Comment;
use App\Services\Media\MediaService;
use App\Services\Media\MediaUploader;

final class UpdateComment
{
    public static function handle(Comment $comment, array $data): Comment
    {
        if (isset($data['image'])) {
            MediaUploader::toEloquent($data['image']['uuid'], $comment);
        } elseif ($comment->image) {
            MediaService::delete($comment->image);
        }

        $comment->text = rtrimbr($data['text']);
        $comment->update();

        return $comment;
    }
}
