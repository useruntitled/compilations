<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MediaResource extends JsonResource
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
            'href' => $this->href,
            'base64_preview' => $this->base64_preview,
            'width' => $this->width,
            'height' => $this->height,
            'format' => $this->format,
        ];
    }
}
