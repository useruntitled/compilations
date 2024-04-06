<?php

namespace App\Notifications;

use App\Http\Resources\UserResource;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class PostUpNotification extends Notification
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
        return [
            'post' => $this->reputation->reputation_to,
            'object_id' => $this->reputation->reputation_to->id,
            'id' => $this->reputation->id,
            'link_post' => route('post', $this->reputation->reputation_to->id),
            'byUser' => new UserResource($this->reputation->user),
        ];
    }
}
