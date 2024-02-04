<?php

namespace App\Jobs;

use App\Http\Controllers\KarmaController;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class HandleUserKarmaJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $reply_or_comment_reputation;

    /**
     * Create a new job instance.
     */
    public function __construct($reply_or_comment_reputation)
    {
        $this->reply_or_comment_reputation = $reply_or_comment_reputation;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        KarmaController::canPost($this->reply_or_comment_reputation->replyToUser);
    }
}
