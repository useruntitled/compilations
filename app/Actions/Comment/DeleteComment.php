<?php

namespace App\Actions\Comment;

use App\Models\Comment;

class DeleteComment
{
    public static function handle(Comment $comment): array
    {
        $comment->image()->delete();

        $isForceDeleted = 0;

        if ($comment->replies->count() == 0) {
            $isForceDeleted = 1;
            $comment->forceDelete();

            return [
                'is_force_deleted' => $isForceDeleted,
                'data' => $comment->only(['id', 'text']),
            ];
        }

        $comment->delete();
        $comment->text = Comment::DELETED_TEXT;
        $comment->update();

        return [
            'is_force_deleted' => $isForceDeleted,
            'data' => $comment->only(['id', 'text', 'image', 'image_preview']),
        ];
    }
}
