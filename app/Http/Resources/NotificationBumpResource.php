<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class NotificationBumpResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $user = User::find($this->data['byUser']['id']);

        return [
            'notification_type' => $this->data['notification_type'],
            'id' => $this->data['id'],
            'type' => str_replace('App\\Models\\', '', $this->data['type']),
            'toUser' => new UserResource(Auth::user()),
            'reactionTo' => $this->data['reactionTo'],
            'byUser' => new UserResource($user),
        ];
    }
}
