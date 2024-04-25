<?php

namespace App\Models;

use App\Traits\HasAuthor;
use App\Traits\HasMedia;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Subsite extends Model
{
    use HasAuthor;
    use HasMedia;

    protected $fillable = [
        'description',
        'user_id',
    ];

    protected $with = [
        'mediaRelation',
    ];

    protected function cover(): Attribute
    {
        return Attribute::get(fn() => $this->mediaRelation);
    }
}
