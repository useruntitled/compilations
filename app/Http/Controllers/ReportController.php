<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReportRequest;
use App\Models\Report;

class ReportController extends Controller
{
    public function store(StoreReportRequest $request): void
    {
        Report::create([
            'report_to_type' => getModel($request->report_to_type),
            'report_to_id' => $request->report_to_id,
            'message' => $request->message,
        ]);
    }
}
