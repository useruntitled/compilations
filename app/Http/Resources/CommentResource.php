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
            'replies' => ReplyResource::collection($this->replies),
            'replies_count' => $this->replies->count(),
            'post' => $this->post,
            'isComment' => True,
            'created_at' => $this->created_at,
            'timestamp' => (new Carbon($this->created_at))->diffForHumans(),
        ];
    }
}
