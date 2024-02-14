<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use App\Services\KarmaService;

class PersonalPageController extends Controller
{
    protected $service;

    const PER_PAGE = 5;

    public function __construct(KarmaService $service)
    {
        $this->service = $service;
    }

    public function index($user_id)
    {
        $user = User::query()->findOrFail($user_id);

        $karma = $this->service->calculateUserKarma($user);

        $posts = $this->getPosts($user_id, 1);

        return inertia('Profile/Index', [
            'section' => 1,
            'user' => $user,
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
            ->latest()
            ->withCount('comments', 'films')
            ->skip(($page - 1) * self::PER_PAGE)
            ->take(self::PER_PAGE)
            ->get();
        $posts = $posts->filter(fn ($p) => $p->isActive);

        return PostResource::collection($posts);
    }

    public function comments($user_id)
    {
        $user = User::query()->findOrFail($user_id);
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
        $comments = Comment::query()->where('user_id', $user_id)
            ->skip(($page - 1) * self::PER_PAGE)
            ->take(self::PER_PAGE)
            ->get();

        return $comments;
    }
}
