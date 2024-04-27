<?php

namespace App\Models;

use App\Traits\HasAuthor;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Reputation extends Model
{
    use HasAuthor;
    use HasFactory;

    protected $guarded = [];

    public function reputation_to(): MorphTo
    {
        return $this->morphTo();
    }

    public function getReputationToUserAttribute()
    {
        return $this->reputation_to->user;
    }

    public function getRepToUserAttribute()
    {
        return $this->reputationToUser;
    }

    public function getRepToUserIsOwnerAttribute()
    {
        return $this->user_id == $this->reputation_to->user->id;
    }

    public function getIsUpAttribute()
    {
        return strtolower($this->action) == 'up';
    }

    protected function isUp(): Attribute
    {
        return Attribute::get(fn () => $this->action == 'up');
    }

    protected function isDown(): Attribute
    {
        return Attribute::get(fn () => $this->action == 'down');
    }
}
