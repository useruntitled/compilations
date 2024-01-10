<?php

namespace App\Models;

use App\Traits\HasAuthor;
use App\Traits\HasReputation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Support\Facades\Auth;

class Post extends Model
{
    use HasFactory, HasReputation, HasAuthor;

    protected $fillable = [
        'user_id','title',
        'description','active',
        'slug'
    ];
    protected $appends = [
        'rep'
    ];
    public function films()
    {
        return $this->belongsToMany(Film::class);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    
}
