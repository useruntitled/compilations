<?php

namespace App\Services\Parser;

use App\DTO\FilmData;
use Illuminate\Support\Facades\Http;

class KinopoiskDotDevParser implements ParserInterface
{
    protected $token;

    public function __construct()
    {
        $this->token = env('KP2_TOKEN');
    }

    public function getFilm(int $id)
    {
        $response = Http::withHeaders([
            'X-API-KEY' => $this->token,
            'Content-Type' => 'application/json',
        ])->get("https://api.kinopoisk.dev/v1.3/movie/$id");

        if ($response->failed()) {
            abort($response->status());
        }

        $json = json_decode($response);
        if (! isset($json->statusCode) || $json->statusCode != 404) {
            return new FilmData($json);
        }

        return null;
    }
}
