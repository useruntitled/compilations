<?php

namespace App\Http\Resources\User;

use App\Http\Resources\MediaResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PanelUserResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'isAdmin' => $this->isAdmin,
            'avatar' => MediaResource::make($this->avatar),
            'subsite' => $this->subsite,
            'roles' => $this->roles,
            'canCreatePosts' => $this->canCreatePosts,
            'is_banned' => $this->isBanned,
            'banned_reason' => $this->banned_reason,
            'is_moder' => $this->isModer,
            'is_admin' => $this->isAdmin,
            'banned_by_user' => $this->bannedByUser,
        ];
    }
}
