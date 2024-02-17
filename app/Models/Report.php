<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Report extends Model
{
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
}
