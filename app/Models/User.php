<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Services\KarmaService;
use App\Traits\HasAvatar;
use App\Traits\HasSubsite;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements  MustVerifyEmail
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use HasSubsite;
    use HasAvatar;

    const TABLE = 'users';

//     const DEFAULT = 1;
//
//     const MODERATOR = 2;
//
//     const ADMIN = 3;

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
        'avatar'
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
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'is_admin' => 'bool',
        'is_creator' => 'bool',
    ];

    protected function isBanned(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->banned_at != null
        );
    }

    protected function isAdmin(): Attribute
    {
        $this->roles ?? $this->roles();

        return Attribute::get(fn () => $this->roles->contains(fn ($r) => $r->role == 'admin'));
    }

    protected function isCreator(): Attribute
    {
        $this->roles ?? $this->roles();

        return Attribute::get(fn () => $this->roles->contains(fn ($r) => $r->role == 'creator'));
    }

    protected function isModer(): Attribute
    {
        $this->roles ?? $this->roles();

        return Attribute::get(fn() => $this->roles->contains(fn($r) => $r->role == 'moder'));
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
        $this->roles ?? $this->roles();
        $isCan = $this->roles->where('role', 'creator')->count();

        return Attribute::get(fn () => $isCan);
    }

    public function karma(KarmaService $service)
    {
        return $service->calculateUserKarma($this);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function receivesBroadcastNotificationsOn(): string
    {
        return 'users.'.$this->id;
    }
}
