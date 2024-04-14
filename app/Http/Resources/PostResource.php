<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // $comments = $this->comments->filter(fn($c) => !$c->isReply)->sortByDesc('created_at');
        $comments = $this->comments;

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'reputation' => $this->reputation,
            'comments_count' => $this->comments_count,
            'tags' => $this->tags,
            'user' => CompressedUserResource::make($this->user),
            'films' => FilmResource::collection($this->films),
            'films_count' => $this->films_count,
            'slug' => $this->slug,
            'timestamp' => $this->created_at->diffForHumans(),
            'image' => MediaResource::make($this->image),
            'image_preview' => $this->image_preview,
            'views' => $this->views,
            'visits' => $this->visits,
        ];
    }
}
