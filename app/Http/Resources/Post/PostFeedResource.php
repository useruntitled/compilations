<?php

namespace App\Http\Resources\Post;

use App\Http\Resources\FilmResource;
use App\Http\Resources\MediaResource;
use App\Http\Resources\User\CompressedUserResource;
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
            'user' => CompressedUserResource::make($this->user),
            'reputation' => $this->reputation,
            'films' => FilmResource::collection($this->films),
            'comments_count' => $this->comments_relation_count,
            'bookmarks_count' => $this->bookmarks_relation_count,
            'has_bookmark' => $this->hasBookmark,
            'films_count' => $this->films_relation_count,
        ];
    }
}
