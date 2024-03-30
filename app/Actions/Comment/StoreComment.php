<?php

namespace App\Actions\Comment;

use App\Models\Comment;
use App\Services\Media\MediaUploader;
use Illuminate\Support\Facades\Auth;

class StoreComment
{
    public static function fromRequest($request)
    {
        if ($request->comment_id) {
            $comment = Comment::find($request->comment_id);

            $level = $comment->level + 1;
        } else {
            $level = 0;
        }

        $comment = Comment::create([
            'post_id' => $request->post_id,
            'comment_id' => $request->comment_id,
            'text' => preg_replace('/(<div><br><\/div>\s*)+$/', '', $request->text),
            'level' => $level,
            'user_id' => Auth::user()->id,
        ]);

        if ($request->image != null) {
            MediaUploader::toEloquent($request->input('image')['href'], $comment);
        }

        return $comment;
    }
}
