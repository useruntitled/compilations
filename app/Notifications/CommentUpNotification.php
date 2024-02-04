<?php

namespace App\Notifications;

use App\Http\Resources\UserResource;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CommentUpNotification extends Notification
{
    use Queueable;

    protected $reputation;

    /**
     * Create a new notification instance.
     */
    public function __construct($reputation)
    {
        $this->reputation = $reputation;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    // public function toMail(object $notifiable): MailMessage
    // {
    //     return (new MailMessage)
    //                 ->line('The introduction to the notification.')
    //                 ->action('Notification Action', url('/'))
    //                 ->line('Thank you for using our application!');
    // }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        $comment = $this->reputation->reputation_to;
        $post = $comment->post;

        return [
            'notification_type' => 'comment.up.notification',
            'comment' => $this->reputation->reputation_to,
            'object_id' => $comment->id,
            'id' => $this->reputation->id,
            'link_post' => route('post', $post->id),
            'link_comment' => route('post', ['id' => $post->id, 'comment' => $comment->id]),
            'byUser' => new UserResource($this->reputation->user),
        ];
    }
}
