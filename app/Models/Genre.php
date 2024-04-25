<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'slug',
        'kp_wire',
    ];

    protected $hidden = [
        'created_at', 'updated_at',
    ];

    public function filmsRelation()
    {
        return $this->belongsToMany(Film::class);
    }

    protected function films(): Attribute
    {
        return Attribute::get(fn () => $this->filmsRelation);
    }
}
