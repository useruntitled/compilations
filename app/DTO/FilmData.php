<?php

namespace App\DTO;

class FilmData extends DTO
{
    public $id;

    public $type;

    public $serial;

    public $name_en;

    public $name_ru;

    public $poster_url;

    public $poster_url_preview;

    public $logo_url;

    public $slogan;

    public $description;

    public $short_description;

    public $country;

    public $start_year;

    public $year;

    public $genres;

    public function __construct($data)
    {
        $this->id = $data->id;
        $this->type = $data->type ?? null;
        $this->serial = $data->isSeries ?? null;
        $this->name_en = $data->enName ?? null;
        $this->name_ru = $data->name ?? null;
        $this->poster_url = data_get($data, 'poster.url');
        $this->poster_url_preview = data_get($data, 'poster.previewUrl');
        $this->logo_url = data_get($data, 'logo.url');
        $this->slogan = $data->slogan ?? null;
        $this->description = $data->description ?? null;
        $this->short_description = $data->shortDescription ?? null;
        $this->country = data_get($data, 'countries.0.name');
        $this->start_year = data_get($data, 'releaseYears.0.start');
        $this->year = $data->year ?? null;
        $this->genres = $data->genres;
    }
}
