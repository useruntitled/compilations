<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostFeedResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\UserResource;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use App\Services\KarmaService;
use Illuminate\Support\Facades\Auth;

class PersonalPageController extends Controller
{
    protected $service;

    protected int $per_page;

    public function __construct(KarmaService $service)
    {
        $this->service = $service;
        $this->per_page = config('post.per_page');
    }

    public function index(?int $user_id = null)
    {
        if($user_id == null) {
            if(!Auth::check()) abort(403);
            $user_id = Auth::id();
        }

        $user = User::query()->findOrFail($user_id);

        $karma = $this->service->calculateUserKarma($user);

        $posts = $this->getPosts($user_id, 1);

        return inertia('Profile/Index', [
            'section' => 1,
            'user' => UserResource::make($user),
            'karma' => $karma,
            'posts' => $posts,
        ]);
    }

    public function getPosts($user_id, $page)
    {
        $posts = Post::query()->with([
            'reputation',
            'user' => ['roles'],
            'films' => ['genres'],
        ])->where('user_id', $user_id)
            ->published()
            ->latest()
            ->withCount('comments', 'films')
            ->skip(($page - 1) * $this->per_page)
            ->take($this->per_page)
            ->get();
        return PostFeedResource::collection($posts);
    }

    public function comments($user_id)
    {
        $user = User::query()->with('subsite')->findOrFail($user_id);
        $comments = $this->getComments($user_id, 1);

        return inertia('Profile/Comments', [
            'section' => 2,
            'karma' => $this->service->calculateUserKarma($user),
            'user' => $user,
            'comments' => $comments,
        ]);
    }

    public function getComments($user_id, $page)
    {
        return Comment::query()->with('image')->where('user_id', $user_id)
            ->latest()
            ->skip(($page - 1) * $this->per_page)
            ->take($this->per_page)
            ->get();
    }
}
