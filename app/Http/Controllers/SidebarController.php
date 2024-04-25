<?php

namespace App\Http\Controllers;

use App\Http\Resources\Comment\SidebarCommentResource;
use App\Models\Comment;

class SidebarController extends Controller
{
    public function getLastComments()
    {
        $comments = Comment::published()
            ->with([
                'userRelation',
                'postRelation',
                'mediaRelation',
            ])
            ->latest()
            ->limit(20)
            ->get();

        return SidebarCommentResource::collection($comments);
    }
}
