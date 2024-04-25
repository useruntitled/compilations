<?php

namespace App\Notifications;

use App\Http\Resources\User\UserResource;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class ReplyNotification extends Notification
{
    use Queueable;

    public $comment;

    public function __construct($comment)
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
            'object_id' => $this->comment->comment->id,
            'parrentComment' => $this->comment->comment,
            'id' => $this->comment->id,
            'link_post' => route('post', $this->comment->post->id),
            'link_comment' => route('post', ['id' => $this->comment->post->id, 'comment' => $this->comment->id]),
            'byUser' => new UserResource($this->comment->user),
        ];
    }
}
