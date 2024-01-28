<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;

class SidebarController extends Controller
{
    
    public function getLastComments()
    {

        $comments = Comment::with(['user' => ['roles'],'post','reputation'])->latest()->limit(20)->get();
        
        // $comments = CommentResource::collection(Comment::query()->orderBy('created_at','desc')->limit(20)->get());

        $comments = $comments->filter(fn($c) => !$c->trashed());

      
        return Response::json($comments,200); 
    }
}
