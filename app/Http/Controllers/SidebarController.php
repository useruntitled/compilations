<?php

namespace App\Http\Controllers;

use App\Models\Comment;

class SidebarController extends Controller
{
    public function getLastComments()
    {

        $comments = Comment::with(['user' => ['roles'], 'post', 'image'])->latest()->limit(20)->get();

        // $comments = CommentResource::collection(Comment::query()->orderBy('created_at','desc')->limit(20)->get());

        $comments = $comments->filter(fn ($c) => ! $c->trashed());

        return $comments;
    }
}
