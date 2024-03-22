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
        $filmData = $this->parser->getFilm($id);
        if ($filmData == null) abort(404);
        return $filmData;
    }

    public function refresh(Request $request)
    {
        $filmData = $this->getFilm($request->id);
        $film = Film::find($request->id);
        $film->update((array)$filmData->except('genres'));

        return Response::json($film, 200);
    }

    public function store(int $id): Film
    {
        $filmData = $this->getFilm($id);;

        $film = Film::create((array)$filmData->except('genres'));

        $genres = collect($filmData->genres)->map(function ($genre) {
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

        return $this->store($request->id);
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
            return Response::json([$this->store($id)], 200);
        }

        return Response::json($films, 200);
    }

}
