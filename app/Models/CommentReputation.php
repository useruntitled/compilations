<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommentReputation extends Model
{
    use HasFactory;
    protected $fillable = [
        'comment_id', 'user_id',
        'action',
    ];
    public function user()
    {
        return $this->hasOne(User::class);
    }
    public function comment()
    {
        return $this->belongsTo(Comment::class);
    }
    public function getReplyToUserAttribute()
    {
       return Comment::find($this->comment_id)->user; 
    }
}
