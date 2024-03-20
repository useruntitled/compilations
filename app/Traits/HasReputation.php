<?php

namespace App\Traits;

use App\Models\Reputation;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Auth;

trait HasReputation
{
    protected $classname;

    public function __construct()
    {
        $this->classname = __CLASS__;
    }

    public function reputationRelation(): MorphMany
    {
        return $this->morphMany(Reputation::class, 'reputation_to', 'reputation_to_type', 'reputation_to_id');
    }


    public function getReputationAttribute()
    {
        $pluses = $this->reputationRelation ?
            $this->reputationRelation->where('action', 'up')
            ->where('reputation_to_type', $this->classname)->count() : 0;
        $minuses = $this->reputationRelation ?
            $this->reputationRelation->where('action', 'down')
            ->where('reputation_to_type', $this->classname)->count() : 0;

        $user_action = Auth::user() ? $this->getUserActionReputation() : null;

        return [
            'up' => $pluses,
            'down' => $minuses,
            'action' => $user_action ?? null,
            'reputation_to_id' => $this->id,
            'overall' => $pluses + $minuses,
        ];
    }

    protected function getUserActionReputation()
    {
        $rep = $this->reputationRelation ? $this->reputationRelation->where('user_id', Auth::user()->id)
            ->where('reputation_to_type', $this->classname)->first() : null;
        if ($rep != null) {
            return $rep->action;
        }

        return null;
    }
}
