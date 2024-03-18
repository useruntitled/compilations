<?php

namespace App\Traits;

use App\Models\Subsite;
use Illuminate\Database\Eloquent\Relations\HasOne;

trait HasSubsite
{
    public function subsite(): HasOne
    {
        return $this->hasOne(Subsite::class);
    }
}
