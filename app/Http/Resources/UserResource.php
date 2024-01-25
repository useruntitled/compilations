<?php

namespace App\Http\Resources;

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
            'avatar' => $this->avatar,
            'avatar_preview' => $this->avatar_preview,
            'background_image_preview' => $this->background_image_preview,
            'roles' => $this->roles,
            'canCreatePosts' => $this->canCreatePosts,
            'description' => $this->description,
        ];
        if(Auth::check() && $this->id == Auth::user()->id){
            $prepare['unreadNotifications_count'] = $this->unreadNotifications->count();
        }
        return $prepare;
    }
}
