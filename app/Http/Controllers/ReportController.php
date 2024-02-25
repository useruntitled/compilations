<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReportRequest;
use App\Models\Report;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function index()
    {

    }

    public function store(StoreReportRequest $request): void
    {
        Report::create([
            'report_to_type' => $this->formatReportType($request->report_to_type),
            'report_to_id' => $request->report_to_id,
            'message' => $request->message,
        ]);
    }

    protected function formatReportType(string $report_to_type)
    {
        return 'App\\Models\\' . ucfirst($report_to_type);
    }
}
