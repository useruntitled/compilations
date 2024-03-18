<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Media extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'format',
        'width', 'height',
        'duration',
        'base64_preview',
        'href',
        'user_id',
        'media_to_type',
        'media_to_id',
    ];

    protected $table = 'medias';

    public function media_to(): MorphTo
    {
        return $this->morphTo();
    }
}
