<?php

namespace App\Jobs;

use App\Enums\UserRole;
use App\Models\Role;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class AddUserRoleToNewUserJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;

    /**
     * Create a new job instance.
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $user_role = Role::whereName(UserRole::USER)->first();
        if ($user_role != null) {
            $this->user->rolesRelation()->attach($user_role->id);
            $this->user->save();
        }
    }
}
