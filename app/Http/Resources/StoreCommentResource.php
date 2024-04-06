<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class StoreCommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $user = Auth::user();

        return [
            'id' => $this->id,
            'comment_id' => $this->comment?->id,
            'post_id' => $this->post_id,
            'replies' => [],
            'replies_count' => 0,
            'level' => $this->level,
            'user' => new CompressedUserResource($user),
            'timestamp' => $this->timestamp,
            'text' => $this->text,
            'image' => $this->image,
            'reputation' => $this->reputation,
        ];
    }
}
