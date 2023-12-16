<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\ReplyResource;
use App\Http\Resources\UserResource;
use App\Models\Comment;
use App\Models\Post;
use App\Models\Reply;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PersonalPageController extends Controller
{
    public function index($id = null,$section = null)
    {
        $id = $id == null ? Auth::user()->id : $id;
        $section == null ? $section = 1 : $section;
        $user = User::query()->findOrFail($id);
        $karma = KarmaController::getUserKarma($user->id);
        switch($section)
        {
            case 1:
                $posts = Post::query()->where('user_id',$id)->get();
                return inertia('Profile/Index',[
                    'section' => $section,
                    'user' => New UserResource($user),
                    'karma' => $karma,
                    'posts' => PostResource::collection($posts),
                ]);
                break;
            case 2:
                $comments = CommentResource::collection(Comment::query()->where('user_id',$id)->get());
                return inertia('Profile/Index',[
                    'section' => $section,
                    'user' => New UserResource($user),
                    'karma' => $karma,
                    'comments' => $comments,
                ]);
                break;
            case 3:
                $replies = ReplyResource::collection(Reply::query()->where('user_id',$id)->get());
                return inertia('Profile/Index',[
                    'section' => $section,
                    'user' => New UserResource($user),
                    'karma' => $karma,
                    'replies' => $replies,
                ]);
                break;
            default: abort(404);
        }
        
        
        
        
    }
}
