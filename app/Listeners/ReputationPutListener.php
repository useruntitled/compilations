<?php

namespace App\Listeners;

use App\Events\ReputationPutEvent;
use App\Http\Controllers\KarmaController;
use App\Jobs\DeleteNotificationAndCallEventJob;
use App\Jobs\SendCommentUpNotificationJob;
use App\Jobs\SendPostUpNotificationJob;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Throwable;

class ReputationPutListener implements ShouldQueue
{
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
        $reputation = $event->reputation;


        if(!$reputation->repToUserIsOwner){
            KarmaController::canPost($reputation->reputation_to->user);


            if(strtolower($reputation->action) == 'down'){
                dispatch(new DeleteNotificationAndCallEventJob($reputation->reputationToUser,$reputation));
            }else{
                switch($reputation->reputation_to_type)
                {
                    case 'App\\Models\\Post':
                        dispatch(new SendPostUpNotificationJob($reputation));
                        break;
                    case 'App\\Models\\Comment':
                        dispatch((new SendCommentUpNotificationJob($reputation)));
                        break;
                    default: break;
                }
            }
        }
    }
}
