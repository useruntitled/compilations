<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class ReplyResource extends JsonResource
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
            'user' => new UserResource($this->user),
            'isReplyToReply' => $this->isReplyToReply,
            'reply_id' => $this->reply_id,
            'reply_to' => $this->replyTo,
            'reputation' => $this->rep,
            'comment_id' => $this->comment->id,
            'comment' => $this->comment,
            'post' => $this->comment->post,
            'isReply' => True,
            'created_at' => $this->created_at,
            'timestamp' => (new Carbon($this->created_at))->diffForHumans(),
        ];
    }
}