<?php

namespace App\Notifications;

use App\Http\Resources\UserResource;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ReplyNotification extends Notification
{
    use Queueable;

    public $comment;

    /**
     * Create a new notification instance.
     */
    public function __construct($comment)
    {
        $this->comment = $comment;
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

    // /**
    //  * Get the mail representation of the notification.
    //  */
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
        return [
            'notification_type' => 'comment.was.replied',
            'object_id' => $this->comment->comment->id,
            'parrentComment' => $this->comment->comment,
            'id' => $this->comment->id,
            'link_post' => route('post', $this->comment->post->id),
            'link_comment' => route('post', ['id' => $this->comment->post->id, 'comment' => $this->comment->id]),
            'byUser' => new UserResource($this->comment->user),
        ];
    }
}
