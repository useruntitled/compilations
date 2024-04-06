<?php

namespace App\Models;

use App\Traits\HasAuthor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Subsite extends Model
{
    use HasAuthor, HasFactory;

    protected $fillable = [
        'description',
        'user_id',
    ];

    protected $with = [
        'cover',
    ];

    public function cover(): MorphOne
    {
        return $this->morphOne(Media::class, 'media_to')->latest();
    }
}
