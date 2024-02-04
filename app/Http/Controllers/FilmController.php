<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class FilmController extends Controller
{
    public function index()
    {

    }

    public function parse($id)
    {
        $ch = curl_init();
        $url = 'https://api.kinopoisk.dev/v1.3/movie/'.$id;
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'X-API-KEY: '.env('kp2_token'),
            'Content-Type: application/json',
        ]);

        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'Curl error: '.curl_error($ch);
        }
        curl_close($ch);

        $json = json_decode($response);
        if ($json != null || $json != '') {
            return $json;
        }
        abort(500);
    }

    public function refresh(Request $request)
    {
        $json = $this->parse($request->id);
        $film = Film::find($request->id);
        $film->update([
            'id' => $json->id,
            'type' => $json->type ?? null,
            'serial' => $json->isSeries ?? null,
            'name_en' => $json->enName ?? null,
            'name_ru' => $json->name ?? null,
            'poster_url' => $json->poster->url ?? null,
            'poster_url_preview' => $json->poster->previewUrl ?? null,
            'logo_url' => $json->logo->url ?? null,
            'slogan' => $json->slogan ?? null,
            'description' => $json->description ?? null,
            'short_description' => $json->shortDescription ?? null,
            'country' => $json->countries[0]->name ?? null,
            'start_year' => $json->releaseYears[0]->start ?? null,
            'year' => $json->year ?? null,
        ]);

        return Response::json($film, 200);
    }

    public function create($id)
    {
        $json = $this->parse($id);
        $film = Film::create([
            'id' => $json->id,
            'type' => $json->type ?? null,
            'serial' => $json->isSeries ?? null,
            'name_en' => $json->enName ?? null,
            'name_ru' => $json->name ?? null,
            'poster_url' => $json->poster->url ?? null,
            'poster_url_preview' => $json->poster->previewUrl ?? null,
            'logo_url' => $json->logo->url ?? null,
            'slogan' => $json->slogan ?? null,
            'description' => $json->description ?? null,
            'short_description' => $json->shortDescription ?? null,
            'country' => $json->countries[0]->name ?? null,
            'start_year' => $json->releaseYears[0]->start ?? null,
            'year' => $json->year ?? null,
        ]);
        if (count($json->genres) != 0) {
            foreach ($json->genres as $genre) {
                $created = Genre::where('name', $genre->name)->first();
                if ($created == null) {
                    $created = Genre::create([
                        'name' => $genre->name,
                        'slug' => Str::slug($genre->name),
                    ]);
                }
                $film->genres()->attach($created->id);
            }
        }

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

    protected function searchByName($query)
    {
        $films = Film::where('name_ru', 'LIKE', "%$query%")->limit(5)->get();
        $films_en = Film::where('name_en', 'LIKE', "%$query%")->limit(5)->get();
        foreach ($films_en as $film) {
            $films->push($film);
        }

        return Response::json($films, 200);
    }

    protected function searchById($id)
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
