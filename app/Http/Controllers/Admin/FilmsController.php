<?php

namespace App\Http\Controllers\Admin;

use App\DTO\FilmData;
use App\Http\Controllers\Controller;
use App\Models\Film;
use App\Models\Report;
use Illuminate\Http\Request;

class FilmsController extends Controller
{
    public function index(Request $request)
    {
        $films = Film::latest()->paginate(config('admin.per_page'));

        return inertia('Admin/Films/Index', [
            'films' => $films,
        ]);
    }

    public function view($id)
    {
        $film = Film::findOrFail($id);
        $reports_count = Report::where('report_to_id', '=', $id)->where('report_to_type', '=', 'App\\Models\\Film')->get()->count();


        return inertia('Admin/Films/Edit', [
            'film' => $film,
            'reports_count' => $reports_count,
        ]);
    }

    public function update(Request $request)
    {
        $film = Film::findOrFail($request->id);

        $film->update($request->except('_method'));
    }
}
