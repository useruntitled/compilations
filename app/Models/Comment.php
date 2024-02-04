<?php

namespace App\Models;

use App\Traits\HasAuthor;
use App\Traits\HasReputation;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Comment extends Model
{
    use HasAuthor, HasFactory, HasReputation, SoftDeletes;

    protected $fillable = [
        'text', 'user_id',
        'post_id', 'comment_id',
        'image', 'level',
    ];

    protected $casts = [
        'created_at',
        'updated_at',

    ];

    protected $appends = [
        'rep', 'timestamp',
        'image_preview',
    ];

    protected $with = [
        'user',
    ];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function replies()
    {
        // return $this->hasMany(Comment::class)->with('replies');
        return $this->hasMany(Comment::class);
    }

    public function comment()
    {
        return $this->belongsTo(Comment::class);
    }

    protected function timestamp(): Attribute
    {
        return Attribute::make(
            get: fn () => (new Carbon($this->created_at))->diffForHumans()
        );
    }

    protected function isDeleted(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->deleted_at != null
        );
    }

    protected function isReply(): Attribute
    {
        return Attribute::make(
            get: fn () => isset($this->comment)
        );
    }

    protected function noReplies(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->replies->count() == 0
        );
    }

    protected function hasParrent(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->isReply
        );
    }

    protected function parrentUser(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->comment?->user
        );
    }

    protected function postUser(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->post->user
        );
    }

    protected function authorOfParrent(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->comment?->user->id == $this->user->id
        );
    }

    protected function authorOfPost(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->post->user->id == $this->user->id
        );
    }

    protected function imagePreview(): Attribute
    {
        if ($this->image == null) {
            return Attribute::make(get: fn () => null);
        }
        [$name, $ext] = explode('.', $this->image);

        return Attribute::make(
            get: fn () => $name.'__preview'.".$ext"
        );
    }
}
