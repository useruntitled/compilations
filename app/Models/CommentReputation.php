<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class CommentReputation extends Model
{
    use HasFactory;
    protected $fillable = [
        'comment_id', 'user_id',
        'action',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function comment()
    {
        return $this->belongsTo(Comment::class);
    }
    public function getReplyToUserAttribute(): User
    {
    //    return Comment::findOrFail($this->comment_id)->user; 
        return $this->comment->user;
    }
    public function getIsUserOwnReputationAttribute()
    {
        return $this->comment->user->id == Auth::user()->id;
    }
}
