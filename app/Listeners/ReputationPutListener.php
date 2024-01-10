<?php

namespace App\Listeners;

use App\Events\NotificationCreated;
use App\Events\NotificationModified;
use App\Events\ReputationPutEvent;
use App\Http\Controllers\KarmaController;
use App\Http\Controllers\NotificationController;
use App\Notifications\BumpReactionNotification;
use App\Notifications\CrutchNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Throwable;

class ReputationPutListener implements ShouldQueue
{
    protected $reputation;
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ReputationPutEvent $event): void
    {   
        $this->reputation = $event->reputation;


        if(!$this->reputation->isUserOwnReputation){
            KarmaController::canPost($this->reputation->reputation_to->user);
            $this->notify();
        }
    }

    protected function notify()
    {
        $notification = new BumpReactionNotification($this->reputation);
        Notification::send($this->reputation->reputationToUser,$notification);
        event(new NotificationModified($this->reputation->reputation_to->user->id));
    }

    public function failed(ReputationPutEvent $event, Throwable $e): void
    {
        
    }


}
