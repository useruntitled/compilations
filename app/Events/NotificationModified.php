<?php

namespace App\Events;

use App\Http\Controllers\NotificationController;
use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NotificationModified implements ShouldQueue, ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $notifiable_id;

    /**
     * Create a new event instance.
     */
    public function __construct($notifiable_id)
    {
        $this->notifiable_id = $notifiable_id;
    }

    public function broadcastOn(): Array
    {
        return [
            new PrivateChannel('users.'.$this->notifiable_id),
        ];  
    }
    
    public function broadcastAs(): string
    {
        return 'unread.notifications.count';
    }

    public function broadcastWith(): Array
    {
        $result = User::find($this->notifiable_id)->countUnreadNotifications();
        return [
            'unreadNotifications_count' => $result,
        ];
    }
}
