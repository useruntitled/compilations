<?php

namespace App\Notifications;

use App\Http\Resources\UserResource;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class BumpReactionNotification extends Notification
{
    use Queueable;

    public $reputation;
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

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'notification_type' => 'bump',
            'id' => $this->reputation->id,
            'type' => str_replace('App\\Models\\','',$this->reputation->reputation_to_type),
            'toUser' => new UserResource($this->reputation->reputationToUser),
            'reactionTo' => $this->reputation->reputation_to,
            'byUser' => new UserResource($this->reputation->user),
            'isDeleted' => false,
        ];
    }
}
