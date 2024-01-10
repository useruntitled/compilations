<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReplyReputation extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id', 'reply_id',
        'action',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function reply()
    {
        return $this->belongsTo(Reply::class);
    }
    public function getReplyToUserAttribute()
    {
        return $this->reply->user;
    }
}
