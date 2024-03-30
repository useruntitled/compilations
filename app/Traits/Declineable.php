<?php

namespace App\Traits;

use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Auth;

trait Declineable
{
    public function declinedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'declined_by');
    }

    public function decline($reason)
    {
        $this->declined_by = Auth::id();
        $this->declined_reason = $reason;
        $this->declined_at = now();
        $this->update();
    }
}
