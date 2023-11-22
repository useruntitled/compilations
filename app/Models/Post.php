<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Post extends Model
{
    use HasFactory;
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
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function reputation()
    {
        return $this->hasMany(PostReputation::class);
    }
    public function getUserActionReputation()
    {
        $rep = $this->reputation->where('user_id',Auth::user()->id)->first();
        if($rep != null) {
            return $rep->action;
        } 
        return null;
    }
    public function getRepAttribute()
    {
        $pluses = $this->reputation->where('action','up')->count();
        $minuses = $this->reputation->where('action','down')->count();
        $user_action = Auth::user() ? $this->getUserActionReputation() : null;
        return [
            'up' => $pluses,
            'down' => $minuses,
            'action' => $user_action,
            'post_id' => $this->id,
        ];
    }
}
