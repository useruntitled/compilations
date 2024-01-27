<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class CommentResource extends JsonResource
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
            'user' => $this->user,
            'text' => $this->text,
            'image' => $this->image,
            'image_preview' => $this->image_preview,
            'rep' => $this->rep,
            'replies' => CommentResource::collection($this->replies),
            'replies_count' => $this->replies->count(),
            'comment' => $this->comment ?? null,
            'post' => [
                'id' => $this->post->id,
                'slug' => $this->post->slug,
                'title' => $this->post->title,
            ],
            'created_at' => $this->created_at,
            'deleted_at' => $this->deleted_at,
            'timestamp' => (new Carbon($this->created_at))->diffForHumans(),
            'post_id' => $this->post_id,
        ];
    }
}
