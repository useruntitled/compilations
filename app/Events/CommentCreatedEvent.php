<?php

namespace App\Events;

use App\Http\Controllers\NotificationController;
use App\Models\Comment;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CommentCreatedEvent implements ShouldQueue, ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $comment;

    /**
     * Create a new event instance.
     */
    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }

    public function broadcastOn(): Array
    {
        return [
            new PrivateChannel('users'),
        ];  
    }
    
    public function broadcastAs(): string
    {
        return 'comments.feed';
    }

    public function broadcastWith(): Array
    {
        return [$this->comment->load(['post' => ['user'],'user' => ['roles']])];
    }
}
