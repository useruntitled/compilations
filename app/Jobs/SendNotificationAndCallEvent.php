<?php

namespace App\Jobs;

use App\Events\NotificationModified;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Notification;

class SendNotificationAndCallEvent implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $notifiable;
    protected $notification;
    protected $data;

    /**
     * Create a new job instance.
     */
    public function __construct($notifiable, $notification,$data)
    {
        $this->notifiable = $notifiable;
        $this->notification = $notification;
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Notification::send($this->notifiable,new $this->notification($this->data));
        event(new NotificationModified($this->notifiable->id));
    }
}
