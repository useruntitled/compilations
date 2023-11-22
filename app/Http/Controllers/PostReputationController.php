<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostReputation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class PostReputationController extends Controller
{
    //
    public function patch(Request $request)
    {
        $post_action_id = $this->findPostActionId($request->post_id);
        if ($post_action_id != null){
            $reputation = PostReputation::find($post_action_id);
            if($reputation->action == $request->action){
                PostReputation::destroy($reputation->id);
                return Post::find($request->post_id)->rep;
            }
            $reputation['action'] = $request->action;
            $reputation->save();
            return Post::find($request->post_id)->rep;
        }
        $this->store($request);
        return Post::find($request->post_id)->rep;
    }
    public function store($request)
    {
        // return Response::json($request->post_id,200);
        $reputation = PostReputation::create([
            'post_id' => $request->post_id,
            'action' => $request->action,
            'user_id' => Auth::user()->id,
        ]);
        // return $reputation;
    }
    public function findPostActionId($post_id)
    {
        $rep = PostReputation::where('user_id',Auth::user()->id)->where('post_id',$post_id)->first();
        if($rep != null){
            return $rep->id;
        }
        return null;
    }
}
