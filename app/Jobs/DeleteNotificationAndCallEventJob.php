<?php

namespace App\Jobs;

use App\Events\NotificationModified;
use App\Http\Controllers\NotificationController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;

class DeleteNotificationAndCallEventJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable;

    protected $notifiable;

    protected $object;

    /**
     * Create a new job instance.
     */
    public function __construct($notifiable, $object)
    {
        $this->notifiable = $notifiable;
        $this->object = $object;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        NotificationController::deleteByObjectId($this->notifiable->id, $this->object->id);
        event(new NotificationModified($this->notifiable->id));
    }
}
