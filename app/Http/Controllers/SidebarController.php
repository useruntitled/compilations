<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Http\Resources\ReplyResource;
use App\Models\Comment;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Response;

class SidebarController extends Controller
{
    public function getLastComments(Request $request)
    {
        // $comments = CommentResource::collection(Comment::query()->orderBy('created_at','desc')->limit(10)->get());
        // $replies = ReplyResource::collection(Reply::query()->orderBy('created_at','desc')->limit(10)->get());
        $comments = CommentResource::collection(Comment::query()->orderBy('created_at','desc')->limit(20)->get());
        // $replies = ReplyResource::collection(Reply::query()->orderBy('created_at','desc')->limit(50)->get());
        // $result = $comments->mergeRecursive($replies);
        // $result = $result->sortByDesc('created_at');
        // $result = $result->take(20);
        // $result = $result->mapWithKeys(function ($item, $key) {
            // return [chr($key + 65) => $item]; // блять иди нахуй
        // });
        // dd($result);


        return Response::json($comments,200); 
    }
}
