<?php

namespace App\Models;

use App\Models\Scopes\ActiveScope;
use App\Traits\HasAuthor;
use App\Traits\HasReputation;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Post extends Model
{
    use HasFactory, HasReputation, HasAuthor;

    protected $fillable = [
        'user_id','title',
        'description','active',
        'slug', 'image'
    ];
    protected $appends = [
        'rep','timestamp',
        'is_active', 'image_preview',
        'has_bookmark',
    ];

    protected $with = [
        'user'
    ];

    protected static function booted(): void
    {
        static::addGlobalScope(new ActiveScope);
    }

    protected function imagePreview(): Attribute
    {
        if ($this->image == null) {
            return Attribute::make(get: fn() => null);
        }
        list($name, $ext) = explode('.', $this->image);
        return Attribute::make(
            get: fn() => $name . '__preview' . ".$ext"
        );
    }

    public function films()
    {
        return $this->belongsToMany(Film::class)->orderByPivot('id', 'asc');
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function bookmarks()
    {
        return $this->hasMany(Bookmark::class);
    }

    protected function hasBookmark(): Attribute
    {
        $this->bookmarks ?? $this->bookmarks();
        return Attribute::make(
            get: fn() => $this->bookmarks->contains('user_id', auth()->id())
        );
    }
    
    protected function timestamp(): Attribute
    {
        return Attribute::make(
            get: fn() => (new Carbon($this->published_at))->diffForHumans()
        );
    }

    protected function isActive(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->active == true
        );
    }

    public function scopeWithFilms(Builder $query, int $count)
    {
        return $query->with(['films' => function ($query) use ($count) {
            $query->limit($count);
        }]);
    }

    public function scopePublished($query)
    {
        return $query->where('active', true);
    }
}
