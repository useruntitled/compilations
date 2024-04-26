<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReputationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // $res = parent::toArray($request);
        // $res['reputation_to'] = $request->reputation_to;
        // return $res;
        return [
            'test' => '123',
            'id' => $request->id,
            'action' => $request->action,
            'reputation_to_type' => $request->reputation_to_type,
            'reputation_to_id' => $request->reputation_to_id,
            'reputation_to' => $request->reputation_to,
            'user_id' => $request->user_id,
        ];
    }
}
