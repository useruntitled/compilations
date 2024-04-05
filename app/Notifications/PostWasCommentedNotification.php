<?php

namespace App\Notifications;

use App\Http\Resources\UserResource;
use App\Models\Comment;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PostWasCommentedNotification extends Notification
{
    use Queueable;

    public $comment;

    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        return [
            'id' => $this->comment->id,
            'post' => $this->comment->post,
            'object_id' => $this->comment->post->id,
            'link_post' => route('post', $this->comment->post->id),
            'link_comment' => route('post', [
                'id' => $this->comment->post->id,
                'comment' => $this->comment->id,
            ]),
            'byUser' => new UserResource($this->comment->user),
        ];
    }
}
