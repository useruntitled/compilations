<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Casts\AsCollection;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'isAdmin'
    ];
    protected $fillable = [
        'name',
        'email',
        'password',
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
    public function getIsAdminAttribute()
    {
        return $this->roles()->where('role','admin')->exists();
    }
    public function getAvatarAttribute()
    {
        if($this->id != null){
            $path = public_path("storage\\avatars\\" . $this->id);
            $exts = ['.png','.jpeg','.jpg'];
            foreach($exts as $ext){
                if(file_exists($path . $ext)){
                return "avatars." . $this->id;
                }
            }
        }
        
        return "avatars." . "Default";
    }
    public function getCanCreatePostsAttribute()
    {
        if($this->roles()->where('role','creator')->exists()){
            return True;
        }
        return False;
    }
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
    public function reply()
    {
        return $this->hasMany(Reply::class);
    }
}
