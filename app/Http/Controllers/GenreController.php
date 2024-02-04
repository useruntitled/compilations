<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function index($slug)
    {
        $genre = Genre::where('slug', $slug)->firstOrFail();

        return inertia('Admin/Genre', [
            'genre' => $genre,
        ]);
    }

    public function wire(Request $request)
    {
        $wire_url = $request->url;
        $genre = Genre::find($request->genre_id);
        $genre->kp_wire = $wire_url;
        $genre->save();
    }
}
