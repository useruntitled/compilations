<?php

namespace App\Models;

use App\Services\KarmaService;
use App\Traits\Banable;
use App\Traits\HasAvatar;
use App\Traits\HasSubsite;
use App\Traits\Roleable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use Banable;
    use HasApiTokens;
    use HasAvatar;
    use HasFactory;
    use HasSubsite;
    use Notifiable;
    use Roleable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'is_creator', 'is_admin',
        'is_banned',
    ];

    protected $with = [
        'mediaRelation',
    ];

    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'provider',
        'provider_user_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'provider',
        'provider_user_id',
        'banned_by_user',
        'banned_by',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime',
        'password' => 'hashed',
        'is_admin' => 'bool',
        'is_creator' => 'bool',
    ];

    public function scopePublished(Builder $builder): void
    {
        $builder->whereNull('banned_at');
    }

    public function scopeDeclined(Builder $builder): void
    {
        $builder->whereNotNull('banned_at');
    }

    public function markAsReadNotifications()
    {
        foreach ($this->notifications as $n) {
            $n->markAsRead();
        }

        return true;
    }

    public function countUnreadNotifications()
    {
        return $this->unreadNotifications()->count();
    }

    protected function canCreatePosts(): Attribute
    {
        $this->rolesRelation ?? $this->rolesRelation();
        $isCan = $this->rolesRelation->where('role', 'creator')->count();

        return Attribute::get(fn () => $isCan);
    }

    protected function karma(): Attribute
    {
        return Attribute::get(fn () => KarmaService::calculateUserKarma($this));
    }

    public function postsRelation(): HasMany
    {
        return $this->hasMany(Post::class, 'user_id');
    }

    protected function posts(): Attribute
    {
        return Attribute::get(fn () => $this->postsRelation);
    }

    public function commentsRelation(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    protected function comments(): Attribute
    {
        return Attribute::get(fn () => $this->commentsRelation);
    }

    public function receivesBroadcastNotificationsOn(): string
    {
        return 'users.'.$this->id;
    }
}
