<?php

namespace App\Events;

use App\Http\Controllers\NotificationController;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class ReputationPutEvent implements ShouldQueue
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $reputation;
    
    /**
     * Create a new event instance.
     */
    public function __construct($reputation)
    {
        $this->reputation = $reputation;
    }

    
    // public function broadcastOn(): Array
    // {
    //     return [
    //         new PrivateChannel('users.'.$this->reputation->reputationToUser->id),
    //     ];  
    // }
    
    // public function broadcastAs(): string
    // {
    //     return 'unread.notifications.count';
    // }

    // public function broadcastWith(): Array
    // {
    //     $result = NotificationController::countUserUnreadNotifications($this->reputation->reputation_to->user->id) + 1;
    //     return [
    //         'unreadNotifications_count' => $result,
    //     ];
    // }
    
}
