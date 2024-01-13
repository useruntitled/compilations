<?php

namespace App\Jobs;

use App\Notifications\CommentUpNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendCommentUpNotificationJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $reputation;

    /**
     * Create a new job instance.
     */
    public function __construct($reputation)
    {
        $this->reputation = $reputation;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        if(!$this->reputation->repToUserIsOwner && $this->reputation->isUp){
            dispatch(new SendNotificationAndCallEvent($this->reputation->repToUser,CommentUpNotification::class,$this->reputation));
        }
    }
}
