<?php

namespace App\Http\Controllers;

use App\Models\Comment;

class SidebarController extends Controller
{
    public function getLastComments()
    {

        return Comment::published()
            ->with([
                'user' => ['roles'],
                'post',
                'image'
            ])
            ->latest()
            ->limit(20)
            ->get();
    }
}
