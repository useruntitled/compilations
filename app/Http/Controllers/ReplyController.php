<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReplyResource;
use App\Models\Comment;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReplyController extends Controller
{
    public function create(Request $request)
    {
        if($request->isReplyToReply == null || $request->isReplyToReply == false){
            $reply = Reply::create([
                'user_id' => Auth::user()->id,
                'comment_id' => $request->comment_id,
                'text' => $request->text,
            ]);
        }
        else{
            $reply = Reply::create([
                'user_id' => Auth::user()->id,
                'comment_id' => $request->comment_id,
                'isReplyToReply' => true,
                'reply_id' => $request->reply_id,
                'text' => $request->text,
            ]);
        }
        return new ReplyResource($reply);
    }
    public function get($comment_id)
    {
        $comment = Comment::find($comment_id);
        if($comment != null){
            return ReplyResource::collection($comment->replies);
        }
        abort(404);
    }
    public function delete(Request $request)
    {
        Reply::destroy($request->reply_id);
    }
    public function put(Request $request)
    {
        $reply = Reply::find($request->reply_id);
        $reply->text = $request->text;
        $reply->save();
        return new ReplyResource($reply);
    }
}
