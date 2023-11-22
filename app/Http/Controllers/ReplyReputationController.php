<?php

namespace App\Http\Controllers;

use App\Models\Reply;
use App\Models\ReplyReputation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReplyReputationController extends Controller
{
    public function patch(Request $request)
    {
        $post_action_id = $this->findReplyActionId($request->reply_id);
        if ($post_action_id != null){
            $reputation = ReplyReputation::find($post_action_id);
            if($reputation->action == $request->action){
                ReplyReputation::destroy($reputation->id);
                return Reply::find($request->reply_id)->rep;
            }
            $reputation['action'] = $request->action;
            $reputation->save();
            return Reply::find($request->reply_id)->rep;
        }
        $this->store($request);
        return Reply::find($request->reply_id)->rep;
    }
    public function store($request)
    {
        // return Response::json($request->reply_id,200);
        $reputation = ReplyReputation::create([
            'reply_id' => $request->reply_id,
            'action' => $request->action,
            'user_id' => Auth::user()->id,
        ]);
        // return $reputation;
    }
    public function findReplyActionId($reply_id)
    {
        $rep = ReplyReputation::where('user_id',Auth::user()->id)->where('reply_id',$reply_id)->first();
        if($rep != null){
            return $rep->id;
        }
        return null;
    }
}
