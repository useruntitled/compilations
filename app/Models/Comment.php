<?php

namespace App\Models;

use App\Traits\Declineable;
use App\Traits\HasAuthor;
use App\Traits\HasImage;
use App\Traits\HasReputation;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use Declineable;
    use HasAuthor;
    use HasFactory;
    use HasImage;
    use HasReputation;
    use SoftDeletes;

    protected $fillable = [
        'text', 'user_id',
        'post_id', 'comment_id',
        'level',
    ];

    protected $appends = [
        'timestamp',
        'is_deleted',
        'is_active',
        'reputation',
    ];

    protected $with = [
        'userRelation',
    ];

    public function scopePublished($query)
    {
        return $query->whereNull('deleted_at')->whereNull('declined_at');
    }

    public function scopeDeclined(Builder $builder): void
    {
        $builder->whereNotNull('declined_at');
    }

    public function postRelation()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    protected function post(): Attribute
    {
        return Attribute::get(fn() => $this->postRelation);
    }

    public function repliesRelation()
    {
        // return $this->hasMany(Comment::class)->with('replies');
        return $this->hasMany(Comment::class, 'comment_id')->withTrashed();
    }

    protected function replies(): Attribute
    {
        return Attribute::get(fn() => $this->repliesRelation);
    }

    public function commentRelation()
    {
        return $this->belongsTo(Comment::class, 'comment_id')->withTrashed();
    }

    protected function comment(): Attribute
    {
        return Attribute::get(fn() => $this->commentRelation);
    }

    protected function timestamp(): Attribute
    {
        return Attribute::get(fn () => $this->created_at->diffForHumans());
    }

    protected function isDeleted(): Attribute
    {
        return Attribute::get(fn () => $this->deleted_at != null);
    }

    protected function isActive(): Attribute
    {
        return Attribute::get(fn () => $this->deleted_at == null && $this->declined_at == null);
    }

    protected function isReply(): Attribute
    {
        return Attribute::get(get: fn () => isset($this->comment));
    }

    protected function noReplies(): Attribute
    {
        return Attribute::get(fn () => $this->replies->count() == 0);
    }

    protected function hasParrent(): Attribute
    {
        return Attribute::get(fn () => $this->isReply);
    }

    protected function parrentUser(): Attribute
    {
        return Attribute::get(fn () => $this->comment?->user);
    }

    protected function postUser(): Attribute
    {
        return Attribute::get(fn () => $this->post->user);
    }

    protected function authorOfParrent(): Attribute
    {
        return Attribute::get(fn () => $this->comment?->user->id == $this->user->id);
    }

    protected function authorOfPost(): Attribute
    {
        return Attribute::get(fn () => $this->post->user->id == $this->user->id);
    }
}
