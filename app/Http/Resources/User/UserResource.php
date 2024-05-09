<?php

namespace App\Http\Resources\User;

use App\Http\Resources\MediaResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $prepare = [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'isAdmin' => $this->isAdmin,
            'avatar' => MediaResource::make($this->avatar),
            'subsite' => [
                'description' => $this->subsite->description,
                'cover' => $this->subsite->cover,
            ],
            'roles' => $this->roles,
            'canCreatePosts' => $this->canCreatePosts,
            'is_banned' => $this->isBanned,
        ];
        if (Auth::check() && $this->id == Auth::user()->id) {
            $prepare['unreadNotifications_count'] = $this->unreadNotifications->count();
        }

        return $prepare;
    }
}
