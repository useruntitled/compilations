<?php

namespace App\Http\Resources\Comment;

use App\Http\Resources\MediaResource;
use App\Http\Resources\User\CompressedUserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SidebarCommentResource extends JsonResource
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
            'text' => $this->text,
            'post' => [
                'id' => $this->post->id,
                'title' => $this->post->title,
            ],
            'image' => MediaResource::make($this->image),
            'user' => CompressedUserResource::make($this->user),
        ];
    }
}
