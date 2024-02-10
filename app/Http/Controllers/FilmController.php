<?php

namespace App\Http\Controllers;

use App\DTO\FilmData;
use App\Models\Film;
use App\Models\Genre;
use App\Services\Parser\ParserInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class FilmController extends Controller
{
    protected ParserInterface $parser;

    public function __construct(ParserInterface $parser)
    {
        $this->parser = $parser;
    }

    protected function getFilm(int $id)
    {
        $json = $this->parser->getFilm($id);
        if($json == null) abort(404);
        return $json;
    }

    public function refresh(Request $request)
    {
        $json = $this->getFilm($request->id);
        $film = Film::find($request->id);
        $filmData = new FilmData($json);
        $film->update((array) $filmData);

        return Response::json($film, 200);
    }

    public function create(int $id): Film
    {
        $json = $this->getFilm($id);

        $filmData = new FilmData($json);

        $film = Film::create((array) $filmData);

        $genres = collect($json->genres)->map(function ($genre) {
            return Genre::firstOrCreate([
                'name' => $genre->name,
                'slug' => Str::slug($genre->name),
            ])->id;
        });

        $film->genres()->attach($genres);

        return $film;
    }

    public function add(Request $request)
    {
        $film = Film::find($request->id);
        if ($film != null) {
            return Response::json($film, 409);
        }

        return $this->create($request->id);
    }

    public function search($query)
    {
        if (ctype_digit($query)) {
            return $this->searchById($query);
        }

        return $this->searchByName($query);
    }

    protected function searchByName(string $query)
    {
        $films = Film::where('name_ru', 'LIKE', "%$query%")->limit(5)->get();
        $films_en = Film::where('name_en', 'LIKE', "%$query%")->limit(5)->get();
        foreach ($films_en as $film) {
            $films->push($film);
        }

        return Response::json($films, 200);
    }

    protected function searchById(int $id)

    {
        $films = Film::where('id', 'LIKE', "$id%")->limit(5)->get();
        if ($films->count() == 0) {
            return Response::json([$this->create($id)], 200);
        }

        return Response::json($films, 200);
    }

    public function edit($id)
    {
        $film = Film::find($id);

        return inertia('Admin/Film', [
            'film' => $film,
        ]);
    }

    public function patch(Request $request)
    {
        $film = Film::find($request->film_id);
        // return Response::json($request->except(['film_id','_method']),200);
        $film->update($request->except(['film_id', '_method']));

        return Response::json($film, 200);
    }
}
