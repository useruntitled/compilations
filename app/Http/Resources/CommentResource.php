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
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'avatar' => $this->user->avatar,
                'avatar_preview' => $this->user->avatar_preview,
            ],
            'level' => $this->level,
            'text' => $this->text,
            'image' => $this->image,
            'image_preview' => $this->image_preview,
            'rep' => $this->rep,

            'replies_count' => $this->replies->count(),

            'comment_id' => $this->comment->id ?? null,

            'created_at' => $this->created_at,
            'deleted_at' => $this->deleted_at,
            'timestamp' => (new Carbon($this->created_at))->diffForHumans(),
            'post_id' => $this->post_id,
            'is_reply' => $this->is_reply,
        ];
    }
}
