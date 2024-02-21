<?php

namespace App\Services;

use App\Models\Reputation;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Cache;

class KarmaService
{
    protected $KARMA_CONDITION_VALUE;

    protected $creatorRole;

    public function __construct()
    {
        $this->KARMA_CONDITION_VALUE = config('karma.posts_creating_condition');
        $this->creatorRole = Role::where('role', 'creator')->first();
    }

    protected function attachCreatorRole(User $user)
    {
        $user->roles()->attach($this->creatorRole->id);

        return true;
    }

    protected function dettachCreatorRole(User $user)
    {
        $user->roles()->detach($this->creatorRole->id);

        return true;
    }

    protected function setCreatorRoleForAdmin(User $user)
    {
        if ($user->isAdmin && ! $user->isCreator) {
            return $this->attachCreatorRole($user);
        } elseif ($user->isAdmin) {
            return true;
        }

        return false;
    }

    public function handleCreatorRole(User $user)
    {
        $karma = $this->calculateUserKarma($user);

        $karmaFlag = $karma >= $this->KARMA_CONDITION_VALUE;

        $this->setCreatorRoleForAdmin($user);

        if ($karmaFlag) {
            if (! $user->isCreator) {
                return $this->attachCreatorRole($user);
            }

            return true;
        } else {
            return $this->dettachCreatorRole($user);
        }
    }

    public function calculateUserKarma(User $user)
    {
        // $reps = Reputation::with(['reputation_to.user','user'])->where('user_id','!=',$user->id)->get()
        // ->reject(fn($rep) => $rep->reputation_to->user->id != $user->id);

        $reputation = Cache::remember("karma-$user->id", now()->addMinutes(5), function() use ($user) {
            $reps = Reputation::with(['reputation_to' => ['user'], 'user'])->where('user_id', '!=', $user->id)->get()
                ->filter(fn ($r) => $r->reputation_to?->user->id == $user->id);
            $reputation = $reps->sum(fn ($rep) => $rep->action == 'up');
            $reputation -= $reps->sum(fn ($rep) => $rep->action == 'down');

            return $reputation;
        });

        return $reputation;


    }
}
