<?php

namespace App\Traits;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;

trait HasComments
{
    public function commentsRelation(): HasMany
    {
        return $this->hasMany(Comment::class, 'post_id');
    }

    protected function comments(): Attribute
    {
        return Attribute::get(fn () => $this->commentsRelation);
    }
}
