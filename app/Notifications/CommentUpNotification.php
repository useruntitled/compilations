<?php

namespace App\Notifications;

use App\Http\Resources\User\UserResource;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class CommentUpNotification extends Notification
{
    use Queueable;

    protected $reputation;

    public function __construct($reputation)
    {
        $this->reputation = $reputation;
    }

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toArray(object $notifiable): array
    {
        $comment = $this->reputation->reputation_to;
        $post = $comment->post;

        return [
            'comment' => $this->reputation->reputation_to,
            'object_id' => $comment->id,
            'id' => $this->reputation->id,
            'link_post' => route('post', $post->id),
            'link_comment' => route('post', ['id' => $post->id, 'comment' => $comment->id]),
            'byUser' => new UserResource($this->reputation->user),
        ];
    }
}
