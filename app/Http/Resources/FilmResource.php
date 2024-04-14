<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FilmResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'name_en' => $this->name_en,
            'name_ru' => $this->name_ru,
            'poster_url' => $this->poster_url,
            'poster_url_preview' => $this->poster_url_preview,
            'description' => $this->description,
            'genres' => GenreResource::collection($this->genres),
        ];
    }
}
