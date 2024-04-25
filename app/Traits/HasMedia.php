<?php

namespace App\Traits;

use App\Models\Media;
use Illuminate\Database\Eloquent\Relations\MorphOne;

trait HasMedia
{
    public function mediaRelation(): MorphOne
    {
        return $this->morphOne(Media::class, 'media_to', 'media_to_type', 'media_to_id')->latest();
    }
}
