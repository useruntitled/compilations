<?php

namespace App\Traits;

use App\Models\Bookmark;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasMany;

trait HasBookmarks
{
    public function bookmarksRelation(): HasMany
    {
        return $this->hasMany(Bookmark::class);
    }

    protected function bookmarks(): Attribute
    {
        return Attribute::get(fn () => $this->bookmarksRelation);
    }

    protected function hasBookmark(): Attribute
    {
        return Attribute::get(fn() => $this->bookmarks->contains('user_id', auth()->id()));
    }
}
