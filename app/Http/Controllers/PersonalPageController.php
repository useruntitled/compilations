<?php

namespace App\Http\Controllers;

use App\Http\Resources\Comment\CommentResource;
use App\Http\Resources\Post\PostFeedResource;
use App\Http\Resources\User\UserResource;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class PersonalPageController extends Controller
{
    public function index(?int $userId = null)
    {
        if ($userId == null) {
            if (! Auth::check()) {
                abort(403);
            }
            $userId = Auth::id();
        }

        $user = User::with('subsiteRelation')->findOrFail($userId);

        $posts = $this->getPosts($userId, 1);

        return inertia('Profile/Index', [
            'section' => 1,
            'user' => UserResource::make($user),
            'karma' => $user->karma,
            'posts' => $posts,
        ]);
    }

    public function getPosts($userId, $page)
    {
        $posts = Post::query()->with([
            'reputationRelation',
            'userRelation' => ['rolesRelation'],
            'filmsRelation' => ['genresRelation'],
        ])->where('user_id', $userId)
            ->latest()
            ->withCount('commentsRelation', 'filmsRelation')
            ->skip(($page - 1) * config('post.per_page'))
            ->take(config('post.per_page'))
            ->get();

        return PostFeedResource::collection($posts);
    }

    public function comments($userId)
    {
        $user = User::with('subsiteRelation')->findOrFail($userId);
        $comments = $this->getComments($userId, 1);

        return inertia('Profile/Comments', [
            'section' => 2,
            'karma' => $user->karma,
            'user' => UserResource::make($user),
            'comments' => $comments,
        ]);
    }

    public function getComments($user_id, $page)
    {
        $comments = Comment::with('mediaRelation')->where('user_id', $user_id)
            ->latest()
            ->skip(($page - 1) * config('post.per_page'))
            ->take(config('post.per_page'))
            ->get();

        return CommentResource::collection($comments);
    }
}
