<?php

namespace App\Models;

use App\Traits\HasAuthor;
use App\Traits\HasReputation;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

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
        'is_active'
    ];

    protected $with = [
        'user'
    ];

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
    
    public function timestamp(): Attribute
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
}
