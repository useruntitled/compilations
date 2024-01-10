<?php

namespace App\Notifications;

use App\Http\Resources\UserResource;
use App\Models\CommentReputation;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CrutchNotification extends Notification
{
    use Queueable;
    public $message;
    /**
     * Create a new notification instance.
     */
    public function __construct($message)
    {
        $this->message = $message;
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
    public function toArray($notifiable): array
    {
        // return [
        //     'rep_id' => $this->args['rep_id'],
        //     'isReply' => $this->args['isReply'],
        //     'reply_id' => $this->args['reply_id'] ?? Null,
        //     'comment_id' => $this->args['comment_id'] ?? Null,
        // ];
        return $this->message;
    }
    // public function toBroadcast(): BroadcastMessage
    // {
    //     $comm_rep = CommentReputation::findOrFail($this->object->id);
    //     return new BroadcastMessage([
    //         'comment' => $comm_rep->comment,
    //         'user' => new UserResource($comm_rep->user),
    //     ]);
    // }

    // public function broadcastType(): string
    // {
    //     return 'users';
    // }
}
