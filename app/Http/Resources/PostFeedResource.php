<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostFeedResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $films = $this->films->take(2);
        return [
            'id' => $this->id,
            'slug' => $this->slug,
            'title' => $this->title,
            'image' => MediaResource::make($this->image),
            'description' => $this->description,
            'timestamp' => $this->timestamp,
            'user' => new CompressedUserResource($this->user),
            'rep' => $this->rep,
            'films' => $films,
            'comments_count' => $this->comments_count,
            'films_count' => $this->films_count,
            'views' => $this->views,
            'visits' => $this->visits,
        ];
    }
}
