<?php

namespace App\Models;

use App\Traits\HasAuthor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Reputation extends Model
{
    use HasFactory, HasAuthor;

    protected $guarded = [];

    // get the parent model
    public function reputation_to(): MorphTo
    {
        return $this->morphTo();
    }

    public function getReputationToUserAttribute()
    {
        return $this->reputation_to->user;
    }

    public function getIsUserOwnReputationAttribute()
    {
        return $this->user_id == $this->reputation_to->user->id;
    }
}
