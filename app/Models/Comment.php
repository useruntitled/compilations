<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'text','user_id',
        'post_id'
    ];
    protected $casts = [
        'created_at',
        'updated_at'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
    public function reputation()
    {
        return $this->hasMany(CommentReputation::class);
    }
    public function replies()
    {
        return $this->hasMany(Reply::class);
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
            'comment_id' => $this->id,
        ];
    }
}
