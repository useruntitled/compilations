<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use App\Services\KarmaService;
use Illuminate\Support\Facades\Auth;

class PersonalPageController extends Controller
{
    protected $service;

    public function __construct(KarmaService $service)
    {
        $this->service = $service;
    }

    public function index($id = null,$section = null)
    {
        $id = $id == null ? Auth::user()->id : $id;
        $section == null ? $section = 1 : $section;
        $section = (int) $section;
        $user = User::query()->findOrFail($id);

        $karma = $this->service->calculateUserKarma($user);

        switch($section)
        {
            case 1:
                $posts = Post::query()->with([
                    'reputation',
                    'user' => ['roles'],
                    'films' => ['genres']
                ])->where('user_id',$id)->limit(20)->get();
                $posts = $posts->filter(fn($p) => $p->isActive);
                // $posts = $user->posts?->filter(fn($p) => $p->isActive);
                $posts->loadCount('comments');
                return inertia('Profile/Index',[
                    'section' => $section,
                    'user' => $user,
                    'karma' => $karma,
                    'posts' => fn() => $posts,
                ]);
                break;
            case 2:
                // $comments = CommentResource::collection(Comment::query()->where('user_id',$id)->get());
                $comments = $user->comments;
                return inertia('Profile/Index',[
                    'section' => $section,
                    'user' => $user,
                    'karma' => $karma,
                    'comments' => fn() => $comments,
                ]);
                break;
            default: abort(404);
        }
    }
}
