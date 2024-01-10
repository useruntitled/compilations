<?php

namespace App\Models;

use App\Traits\HasAuthor;
use App\Traits\HasReputation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Comment extends Model
{
    use HasFactory, HasReputation, HasAuthor, SoftDeletes;
    protected $fillable = [
        'text','user_id',
        'post_id','comment_id'
    ];
    protected $casts = [
        'created_at',
        'updated_at'
    ];
    protected $appends = [
        'isReply'
    ];
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
    
    public function replies()
    {
        return $this->hasMany(Comment::class,'comment_id');
    }

    public function comment()
    {
        return $this->belongsTo(Comment::class,'comment_id');
    }

    public function getIsReplyAttribute()
    {
        return $this->comment != null;
    }
}
