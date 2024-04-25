<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Casts\Attribute;

trait HasImage
{
    use HasMedia;

    protected function image(): Attribute
    {
        return Attribute::get(fn () => $this->mediaRelation);
    }
}
