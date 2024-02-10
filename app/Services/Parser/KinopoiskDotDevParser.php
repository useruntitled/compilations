<?php

namespace App\Services\Parser;

class KinopoiskDotDevParser implements ParserInterface
{
    protected $token;

    public function __construct()
    {
        $this->token = env('KP2_TOKEN');
    }

    public function getFilm(int $id)
    {
        $ch = curl_init();
        $url = 'https://api.kinopoisk.dev/v1.3/movie/'.$id;
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'X-API-KEY: '.$this->token,
            'Content-Type: application/json',
        ]);

        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'Curl error: '.curl_error($ch);
        }
        curl_close($ch);

        $json = json_decode($response);
        if (!isset($json->statusCode) || $json->statusCode != 404) {
            return $json;
        }

        return null;
    }
}
