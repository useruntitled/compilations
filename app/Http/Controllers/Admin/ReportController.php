<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Report;

class ReportController extends Controller
{
    public function index($id)
    {
        $report = Report::findOrFail($id);
        return inertia('Admin/Reports/View', [
            'report' => $report,
        ]);
    }
}