<?php

namespace App\Traits;

use App\Models\Reputation;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait HasReputation
{
    public function reputationRelation(): MorphMany
    {
        return $this->morphMany(
            Reputation::class,
            'reputation_to',
            'reputation_to_type',
            'reputation_to_id'
        );
    }

    protected function getSessionVotedReputation(): ?Reputation
    {
        if (!$this->reputationRelation) {
            return null;
        }

        return $this->reputationRelation
            ->where('user_id', auth()->user()?->id)->first();
    }

    protected function getSessionVotedReputationId(): ?int
    {
        if ($this->getSessionVotedReputation() == null) {
            return null;
        }

        return $this->getSessionVotedReputation()->id;
    }

    protected function getUserActionReputation(): ?string
    {
        return $this->getSessionVotedReputation()->action ?? null;
    }

    protected function getUpVotesCount(): int
    {
        if (!$this->reputationRelation) {
            return 0;
        }

        return $this->reputationRelation->where('action', 'up')->count();
    }

    protected function getDownVotesCount(): int
    {
        if (!$this->reputationRelation) {
            return 0;
        }

        return $this->reputationRelation->where('action', 'down')->count();
    }

    protected function reputation(): Attribute
    {
        return Attribute::get(function () {
            $pluses = $this->getUpVotesCount();
            $minuses = $this->getDownVotesCount();
            $action = $this->getUserActionReputation();
            $id = $this->getSessionVotedReputationId();

            return [
                'id' => $id,
                'up' => $pluses,
                'down' => $minuses,
                'action' => $action,
                'reputation_to_id' => $this->id,
                'overall' => $pluses + $minuses,
            ];
        });
    }
}
