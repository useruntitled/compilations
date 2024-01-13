<?php

namespace App\Listeners;

use App\Actions\DeleteNotificationAndCallEvent;
use App\Actions\SendCommentUpNotification;
use App\Actions\SendPostUpNotification;
use App\Events\ReputationPutEvent;
use App\Http\Controllers\KarmaController;
use App\Jobs\DeleteNotificationAndCallEventJob;
use App\Jobs\SendCommentUpNotificationJob;
use App\Jobs\SendPostUpNotificationJob;
use App\Services\KarmaService;
use App\Services\NotificationService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Throwable;

class ReputationPutListener implements ShouldQueue
{

    
    protected $notifier;
    protected $karmaService;

    /**
     * Create the event listener.
     */
    public function __construct(NotificationService $notifier, KarmaService $karmaService)
    {
        $this->notifier = $notifier;
        $this->karmaService = $karmaService;
    }

    /**
     * Handle the event.
     */
    public function handle(ReputationPutEvent $event): void
    {   
        $reputation = $event->reputation;


        if(!$reputation->repToUserIsOwner){
            $this->karmaService->handleCreatorRole($reputation->reputation_to->user);


            if(strtolower($reputation->action) == 'down'){
                $this->notifier->deleteAndCallEvent($reputation->reputationToUser,$reputation);

            }else{
                switch($reputation->reputation_to_type)
                {
                    case 'App\\Models\\Post':
                        $this->notifier->sendPostUpNotification($reputation);
                        break;
                    case 'App\\Models\\Comment':
                        $this->notifier->sendCommentUpNotification($reputation);
                        break;
                    default: break;
                }
            }
        }
    }
}
