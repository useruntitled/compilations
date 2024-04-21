<?php

namespace App\Traits;

use App\Models\Film;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait HasFilms
{
    public function filmsRelation(): BelongsToMany
    {
        return $this->belongsToMany(Film::class)->orderByPivot('id');
    }

    protected function films(): Attribute
    {
        return Attribute::get(fn () => $this->filmsRelation);
    }
}
