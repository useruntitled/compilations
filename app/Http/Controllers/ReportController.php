<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReportRequest;
use App\Models\Report;
use Illuminate\Database\Eloquent\Relations\Relation;

class ReportController extends Controller
{
    public function index()
    {

    }

    public function store(StoreReportRequest $request): void
    {
        Report::create([
            'report_to_type' => Relation::getMorphedModel(strtolower($request->report_to_type)),
            'report_to_id' => $request->report_to_id,
            'message' => $request->message,
        ]);
    }
}
