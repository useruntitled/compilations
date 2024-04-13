<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Media extends Model
{
    protected $table = 'medias';

    protected $fillable = [
        'uuid',
        'format',
        'width', 'height',
        'duration',
        'base64_preview',
        'href',
        'user_id',
        'media_to_type',
        'media_to_id',
    ];

    protected $primaryKey = 'uuid';

    protected $casts = [
        'uuid' => 'string',
    ];

    public function media_to(): MorphTo
    {
        return $this->morphTo();
    }

    protected function filename(): Attribute
    {
        return Attribute::get(fn () => "$this->uuid.$this->format");
    }
}
