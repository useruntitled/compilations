<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;

trait Banable
{
    protected function isBanned(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->banned_at != null
        );
    }

    public function scopeBanned($query)
    {
        return $query->whereNotNull('banned_at');
    }

    public function scopeNotBanned($query)
    {
        return $query->whereNull('banned_at');
    }

    public function ban($reason)
    {
        $this->banned_at = now();
        $this->banned_by = Auth::id();
        $this->banned_reason = $reason;
        $this->update();
    }

    public function unBan()
    {
        $this->banned_at = null;
        $this->update();
    }

    public function bannedByUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'banned_by');
    }
}
