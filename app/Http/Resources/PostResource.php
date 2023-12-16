<?php

namespace App\Http\Resources;

use Illuminate\Support\Carbon;

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
        return [
            
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'reputation' => $this->rep,
            'comments' => CommentResource::collection($this->comments)->sortByDesc(fn($comment) => $comment->id)->all(),
            'comments_count' => $this->comments->count() + $this->comments->sum(fn($comm) => $comm->replies->count()),
            'tags' => $this->tags,
            'user' => new UserResource($this->user),
            'films' => FilmResource::collection($this->films),
            'films_count' => $this->films->count(),
            'slug' => $this->slug,
            'timestamp' => (new Carbon($this->created_at))->diffForHumans(),
        ];
    }
}
