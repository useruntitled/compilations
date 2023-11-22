<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Reply extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id','comment_id',
        'reply_id','isReplyToReply',
        'text',
    ];
    public function comment()
    {
        return $this->belongsTo(Comment::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function reputation()
    {
        return $this->hasMany(ReplyReputation::class);
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
            'reply_id' => $this->id,
        ];
    }
    public function getReplyToAttribute()
    {
        if($this->isReplyToReply){
            $reply = Reply::find($this->reply_id);
            return [
                'user' => $reply->user,
                'reply_id' => $reply->id,
                'type' => 'reply',
            ];
        }
         return [
                'user' => $this->comment->user,
                'reply_id' => $this->comment->id,
                'type' => 'comment',
            ];
    }
}
