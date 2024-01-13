<?php

namespace App\Listeners;

use App\Events\NotificationModified;
use App\Events\ReputationDeletedEvent;
use App\Http\Controllers\KarmaController;
use App\Http\Controllers\NotificationController;
use App\Jobs\DeleteNotificationAndCallEventJob;
use App\Notifications\CrutchNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Throwable;

class ReputationDeletedListener implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        
    }

    /**
     * Handle the event.
     */
    public function handle(ReputationDeletedEvent $event): void
    {
        $reputation = $event->reputation;

        if(!$reputation->RepToUserIsOwner){
            dispatch(new DeleteNotificationAndCallEventJob($reputation->reputationToUser,$reputation));

            KarmaController::canPost($reputation->reputation_to->user);
        }

        // $reputation = $event->args;
        // if(!$reputation['isUserOwnReputation']){
        //     KarmaController::canPost($reputation['reputation_to']->user);
        //     NotificationController::deleteNotificationByParam($reputation['reputation_to']->user->id,'id',
        //     $reputation['id']);
        //     event(new NotificationModified($reputation['reputation_to']->user->id));
        // }
        
    }

}
