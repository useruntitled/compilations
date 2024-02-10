<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PusherCommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'avatar' => $this->user->avatar,
                'avatar_preview' => $this->user->avatar_preview,
            ],
            'post' => [
                'id' => $this->post->id,
                'slug' => $this->post->slug,
                'title' => $this->post->title,
            ],
            'text' => $this->text,
            'id' => $this->id,
            'image' => $this->image,
            'image_preview' => $this->image_preview,
        ];
    }
}
