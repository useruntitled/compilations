<?php

namespace App\Traits;

use App\Models\Report;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait Reportable
{
    public function report_to(): MorphMany
    {
        return $this->morphMany(Report::class, 'report_to');
    }
}
