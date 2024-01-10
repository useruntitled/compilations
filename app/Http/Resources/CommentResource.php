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
            'user' => new UserResource($this->user),
            'text' => $this->text,
            'reputation' => $this->rep,
            'replies' => CommentResource::collection($this->replies),
            'replies_count' => $this->replies->count(),
            'comment' => $this->comment ?? null,
            'post_id' => $this->post_id,
            'post' => $this->post,
            'created_at' => $this->created_at,
            'deleted_at' => $this->deleted_at,
            'timestamp' => (new Carbon($this->created_at))->diffForHumans(),
        ];
    }
}
