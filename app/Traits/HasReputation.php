<?php

namespace App\Traits;

use App\Models\Reputation;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Auth;

trait HasReputation
{
    public function reputationRelation(): MorphMany
    {
        return $this->morphMany(Reputation::class, 'reputation_to', 'reputation_to_type', 'reputation_to_id');
    }

    public function getReputationAttribute()
    {
        $pluses = $this->reputationRelation ?
            $this->reputationRelation->where('action', 'up')
                ->where('reputation_to_type', __CLASS__)->count() : 0;
        $minuses = $this->reputationRelation ?
            $this->reputationRelation->where('action', 'down')
                ->where('reputation_to_type', __CLASS__)->count() : 0;

        $action = Auth::user() ? $this->getUserActionReputation() : null;

        $id = $this->reputationRelation ? $this->reputationRelation->where('user_id', Auth::user()->id)
            ->where('reputation_to_type', __CLASS__)->first()?->id : null;

        return [
            'id' => $id,
            'up' => $pluses,
            'down' => $minuses,
            'action' => $action,
            'reputation_to_id' => $this->id,
            'overall' => $pluses + $minuses,
        ];
    }

    protected function getUserActionReputation()
    {
        $rep = $this->reputationRelation ? $this->reputationRelation->where('user_id', Auth::user()->id)
            ->where('reputation_to_type', __CLASS__)->first() : null;
        if ($rep != null) {
            return $rep->action;
        }

        return null;
    }
}
