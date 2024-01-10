<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\Reputation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class NotificationController extends Controller
{

    public function read()
    {
        $notifications = Auth::user()->unreadNotifications->get();
        foreach($notifications as $n){
            $n->markAsRead();
        }
    }



    public static function deleteNotificationByParam($notifiable_id,$param_name,$param_content)
    {
        $user_id = $notifiable_id;
        $notifications = User::find($user_id)->notifications()
        ->whereJsonContains("data->$param_name",$param_content)->get();
        foreach($notifications as $n){
            $n->delete();
        }
    }


    public static function prepareNotificationAboutReaction(Reputation $reputation): Array
    {
        return [
            'notification_type' => 'bump',
            'id' => $reputation->id,
            'type' => str_replace('App\\Models\\','',$reputation->reputation_to_type),
            'toUser' => new UserResource($reputation->reputationToUser),
            'reactionTo' => $reputation->reputation_to,
            'byUser' => new UserResource($reputation->user),
            'isDeleted' => false,
        ];
    }
    
    public static function prepareNotificationAboutDeletedReaction($reputation_id): Array
    {

        return [
            'notification_type' => 'bump.deleted',
            'id' => $reputation_id,
            'isDeleted' => true,
        ];
    }
    
    public static function prepareNotificationPostWasCommented($comment): Array
    {
        return [
            'notification_type' => 'post.was.commented',
            'id' => $comment->id,
            'byUser' => new UserResource($comment->user),
        ];
    }

    public static function countUserUnreadNotifications($user_id)
    {
        return User::find($user_id)->unreadNotifications()->count();
    }

    public function getUserNotifications($user_id)
    {
        $notifications = User::find($user_id)->notifications()->latest()->get();
        return  NotificationResource::collection($notifications);
    }

    
}
