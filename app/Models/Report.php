<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'report_to_type',
        'message',
        'report_to_id',
    ];

    public function reportable()
    {
        return $this->morphTo();
    }
}
