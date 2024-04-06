<?php

namespace App\Actions\Comment;

use App\Services\Media\MediaService;
use App\Services\Media\MediaUploader;

class UpdateComment
{
    public static function fromRequest($comment, $request)
    {
        if ($request->image != null) {
            MediaUploader::toEloquent($request->input('image')['href'], $comment);
        } elseif ($comment->image) {
            MediaService::delete($comment->image);
        }

        $comment->text = rtrimbr($request->text);
        $comment->update();

        return $comment;
    }
}
