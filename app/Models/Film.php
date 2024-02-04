<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    use HasFactory;

    protected $guarded = [

    ];

    // protected $with = [
    //     'genres'
    // ];

    public function genres()
    {
        return $this->belongsToMany(Genre::class);
    }
}
