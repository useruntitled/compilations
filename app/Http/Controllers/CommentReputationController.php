<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\CommentReputation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentReputationController extends Controller
{
    public function patch(Request $request)
    {
        $post_action_id = $this->findCommentActionId($request->comment_id);
        if ($post_action_id != null){
            $reputation = CommentReputation::find($post_action_id);
            if($reputation->action == $request->action){
                CommentReputation::destroy($reputation->id);
                return Comment::find($request->comment_id)->rep;
            }
            $reputation['action'] = $request->action;
            $reputation->save();
            return Comment::find($request->comment_id)->rep;
        }
        $this->store($request);
        return Comment::find($request->comment_id)->rep;
    }
    public function store($request)
    {
        // return Response::json($request->comment_id,200);
        $reputation = CommentReputation::create([
            'comment_id' => $request->comment_id,
            'action' => $request->action,
            'user_id' => Auth::user()->id,
        ]);
        // return $reputation;
    }
    public function findCommentActionId($comment_id)
    {
        $rep = CommentReputation::where('user_id',Auth::user()->id)->where('comment_id',$comment_id)->first();
        if($rep != null){
            return $rep->id;
        }
        return null;
    }
}
