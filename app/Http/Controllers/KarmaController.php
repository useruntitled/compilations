<?php

namespace App\Http\Controllers;

use App\Models\CommentReputation;
use App\Models\PostReputation;
use App\Models\ReplyReputation;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class KarmaController extends Controller
{
    public function forbidden()
    {
        $karma = $this->getUserKarma();
        if($karma >= env('CAN_POST_KARMA')){
            return to_route('home');
        }
        return inertia('Karma/Forbidden',[
            'karma' => $karma,
        ]);
    }
    public static function getUserKarma($user_id = null)
    {

        $user_id = $user_id ?? Auth::user()->id;
        $rep_comm = CommentReputation::all()->reject(fn($rep) => $rep->comment->user->id != $user_id);
        $reputation = $rep_comm->sum(fn($rep) => $rep->action == 'up');
        $reputation -= $rep_comm->sum(fn($rep) => $rep->action == 'down');
        return $reputation;
    }
    public static function canPost($user)
    {
        $karma = KarmaController::getUserKarma($user->id);
        if($user->isAdmin != true && $karma <= env('CAN_POST_KARMA') && $user->canCreatePosts != false){
            $user->roles()->detach(Role::where('role','creator')->first()->id);
            $user->canCreatePosts = false;
            return;
        }
        if(($user->canCreatePosts == false && $karma >= env('CAN_POST_KARMA')) || ($user->isAdmin && $user->canCreatePosts == false)){
            $user->roles()->attach(Role::where('role','creator')->first()->id);
            $user->canCreatePosts = true;
            return;
        }
        return;
    }
}
