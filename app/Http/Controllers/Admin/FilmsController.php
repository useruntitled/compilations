<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Film;
use App\Models\Report;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class FilmsController extends Controller
{
    public function index(Request $request)
    {
        $films = Film::latest()
            ->when($request->input('search'), function (Builder $query, $search) {
                $query->where('name_ru', 'like', "%$search%")
                    ->orWhere('name_en', 'like', "%$search%")
                    ->orWhere('id', 'like', "%$search%");
            })
            ->paginate(config('admin.per_page'))
            ->withQueryString();

        return inertia('Admin/Films/Index', [
            'list' => $films,
            'search' => $request->search,
        ]);
    }

    public function view($id)
    {
        $film = Film::findOrFail($id);
        $reports_count = Report::where('report_to_id', '=', $id)
            ->where('report_to_type', '=', 'App\\Models\\Film')
            ->get()
            ->count();

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
