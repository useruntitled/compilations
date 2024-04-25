<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $hidden = [
        'created_at', 'updated_at',
    ];

    public function genresRelation()
    {
        return $this->belongsToMany(Genre::class);
    }

    protected function genres(): Attribute
    {
        return Attribute::get(fn() => $this->genresRelation);
    }
}
