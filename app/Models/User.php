<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Http\Resources\NotificationResource;
use App\Services\KarmaService;
use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // const DEFAULT = 1;

    // const MODERATOR = 2;

    // const ADMIN = 3;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'is_creator','is_admin'
    ];

    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'avatar'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected function isAdmin(): Attribute
    {
        $this->roles ?? $this->roles();
        return Attribute::make(
            get: fn() => $this->roles->contains(fn($r) => $r->role == 'admin')
        );
    }

    protected function isCreator(): Attribute
    {
        $this->roles ?? $this->roles();
        return Attribute::make(
            get: fn() =>  $this->roles->contains(fn($r) => $r->role == 'creator')
        );
    }

    // protected function avatar(): Attribute
    // {
    //     return Attribute::make(
    //         get: function(){
    //             if($this->id != null){
    //                 $path = public_path("storage\\avatars\\" . $this->id);
    //                 $exts = ['.png','.jpeg','.jpg'];
    //                 foreach($exts as $ext){
    //                     if(file_exists($path . $ext)){
    //                     return "avatars." . $this->id;
    //                     }
    //                 }
    //             }
                
    //             return "avatars." . "Default";
    //             }
    //     );
    // }

    public function markAsReadNotifications()
    {
        foreach($this->notifications as $n){
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
        return Attribute::make(
            get: function(){
                if($this->roles()->where('role','creator')->exists()){
            return True;
            }
            return False;
            }
        );
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
