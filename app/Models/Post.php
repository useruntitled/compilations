<?php

namespace App\Models;

use App\Models\Scopes\ActiveScope;
use App\Traits\HasAuthor;
use App\Traits\HasReputation;
use App\Traits\Reportable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Post extends Model
{
    use HasAuthor, HasReputation, Reportable, SoftDeletes;

    protected $fillable = [
        'user_id', 'title',
        'description',
        'slug', 'image',
        'views', 'visits',
    ];

    protected $appends = [
        'rep', 'timestamp', 'image_preview',
        'has_bookmark',
    ];

    protected $with = [
        'user',
    ];

    protected $casts = [
        'user_id' => 'integer',
    ];

    protected static function booted(): void
    {
        static::addGlobalScope(new ActiveScope);
    }

    public function scopePublished($query)
    {
        return $query->whereNotNull('published_at')->whereNull('deleted_at');
    }

    protected function imagePreview(): Attribute
    {
        if ($this->image == null) {
            return Attribute::get(fn () => null);
        }
        [$name, $ext] = explode('.', $this->image);

        return Attribute::get(fn () => $name.'__preview'.".$ext");
    }

    public function films(): BelongsToMany
    {
        return $this->belongsToMany(Film::class)->orderByPivot('id', 'asc');
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function bookmarks(): HasMany
    {
        return $this->hasMany(Bookmark::class);
    }

    protected function hasBookmark(): Attribute
    {
        $this->bookmarks ?? $this->bookmarks();

        return Attribute::get(fn () => $this->bookmarks->contains('user_id', auth()->id()));
    }

    protected function timestamp(): Attribute
    {
        return Attribute::get(fn () => (new Carbon($this->published_at))->diffForHumans());
    }

    protected function isActive(): Attribute
    {
        return Attribute::get(fn() => $this->published_at != null && $this->deleted_at == null);
    }
}
