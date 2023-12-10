<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Http\Resources\ReplyResource;
use App\Models\Comment;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class SidebarController extends Controller
{
    public function getLastComments(Request $request)
    {
        // $comments = CommentResource::collection(Comment::query()->orderBy('created_at','desc')->limit(10)->get());
        // $replies = ReplyResource::collection(Reply::query()->orderBy('created_at','desc')->limit(10)->get());
        $comments = Comment::query()->orderBy('created_at','desc')->limit(10)->get();
        $replies = Reply::query()->orderBy('created_at','desc')->limit(10)->get();
        $result = $comments->merge($replies);
        $result = $result->sortByDesc('created_at');

        $final_result = [];

        foreach($result as $c){
            $isComment = $c->comment == null ? True : False; 
            if($isComment){
                $final_result[] = New CommentResource($c);
            }
            else{
                $final_result[] = new ReplyResource($c);
            }
        }

        
        

        return Response::json($final_result,200);
    }
}
