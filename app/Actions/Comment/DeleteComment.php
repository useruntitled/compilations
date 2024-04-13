<?php

namespace App\Actions\Comment;

use App\Enums\CommentText;
use App\Models\Comment;

final class DeleteComment
{
    public static function handle(Comment $comment): array
    {
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
        $comment->text = CommentText::DELETED_TEXT;
        $comment->update();

        return [
            'is_force_deleted' => $isForceDeleted,
            'data' => $comment->only(['id', 'text', 'image', 'image_preview']),
        ];
    }
}
