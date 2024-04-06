<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Report extends Model
{
    const SPAM = 'spam';

    const RUDE = 'rude';

    const VIOLENCE = 'violence';

    const ILLEGAL = 'illegal';

    const OTHER = 'other';

    const LIE = 'lie';

    protected $fillable = [
        'report_to_type',
        'message',
        'report_to_id',
    ];

    protected $with = [
        'report_to',
    ];

    public function report_to(): MorphTo
    {
        return $this->morphTo();
    }

    protected function serializeDate($date): string
    {
        return $date->diffForHumans();
    }
}
