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
            'id' => $this->id,
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'avatar' => MediaResource::make($this->user->avatar),
            ],
            'post' => [
                'id' => $this->post->id,
                'slug' => $this->post->slug,
                'title' => $this->post->title,
            ],
            'text' => $this->text,
            'image' => MediaResource::make($this->image),
        ];
    }
}
