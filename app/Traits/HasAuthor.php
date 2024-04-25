<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait HasAuthor
{
    public function userRelation(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    protected function user(): Attribute
    {
        return Attribute::get(fn() => $this->userRelation);
    }

    public function isAuthoredBy(User $user): bool
    {
        return $this->user->id == $user->id;
    }
}
