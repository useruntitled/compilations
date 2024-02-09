<?php

namespace App\Services;

use App\Events\NotificationModified;
use App\Models\User;
use App\Notifications\CommentUpNotification;
use App\Notifications\PostUpNotification;
use App\Notifications\PostWasCommentedNotification;
use App\Notifications\ReplyNotification;
use Illuminate\Support\Facades\Notification;

class NotificationService
{
    public function __construct()
    {

    }

    public function deleteAndCallEvent($notifiable, $object)
    {
        $this->deleteByObjectId($notifiable->id, $object->id);
        event(new NotificationModified($notifiable->id));
    }

    public function sendAndCallEvent($notifiable, $notification, $data)
    {
        Notification::send($notifiable, new $notification($data));
        event(new NotificationModified($notifiable->id));
    }

    public function sendReplyNotification($comment)
    {
        if ($comment->hasParrent && ! $comment->authorOfParrent) {
            $this->sendAndCallEvent($comment->comment->user, ReplyNotification::class, $comment);
        }
    }

    public function sendPostWasCommentedNotification($comment)
    {
        if (! $comment->authorOfPost) {
            $this->sendAndCallEvent($comment->post->user, PostWasCommentedNotification::class, $comment);
        }
    }

    public function sendPostUpNotification($reputation)
    {
        if (! $reputation->repToUserIsOwner && $reputation->isUp) {
            $this->sendAndCallEvent($reputation->reputationToUser, PostUpNotification::class, $reputation);
        }
    }

    public function sendCommentUpNotification($reputation)
    {
        if (! $reputation->repToUserIsOwner && $reputation->isUp) {
            $this->sendAndCallEvent($reputation->reputationToUser, CommentUpNotification::class, $reputation);
        }
    }

    public function deleteByParam($notifiable_id, $param_name, $param_content)
    {
        $user_id = $notifiable_id;
        $notifications = User::find($user_id)->notifications()
            ->whereJsonContains("data->$param_name", $param_content)->get();
        foreach ($notifications as $n) {
            $n->delete();
        }
    }

    public function deleteByObjectId($notifiable_id, $id): void
    {
        $user_id = $notifiable_id;
        $notifications = User::find($user_id)->notifications()
            ->whereJsonContains('data->id', $id)->get();
        foreach ($notifications as $n) {
            $n->delete();
        }
    }
}
