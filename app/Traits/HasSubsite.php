<?php

namespace App\Traits;

use App\Models\Subsite;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasOne;

trait HasSubsite
{
    public function subsiteRelation(): HasOne
    {
        return $this->hasOne(Subsite::class, 'user_id');
    }

    protected function subsite(): Attribute
    {
        return Attribute::get(fn() => $this->subsiteRelation);
    }
}
