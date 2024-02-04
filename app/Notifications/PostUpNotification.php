<?php

namespace App\Notifications;

use App\Http\Resources\UserResource;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PostUpNotification extends Notification
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
        return [
            'notification_type' => 'post.up.notification',
            'post' => $this->reputation->reputation_to,
            'object_id' => $this->reputation->reputation_to->id,
            'id' => $this->reputation->id,
            'link_post' => route('post', $this->reputation->reputation_to->id),
            'byUser' => new UserResource($this->reputation->user),
        ];
    }
}
