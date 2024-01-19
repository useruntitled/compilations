<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class CommentController extends Controller
{
    public function index($id)
    {
        $comment = Comment::find($id);
        
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'text' => 'required|min:1|max:2000',
            'comment_id' => 'min:1',
            'post_id' => 'required',
        ]);
        return Response::json($this->store($request),200);

    }
    public function store($request){
        $comment = Comment::create([
            'post_id' => $request->post_id,
            'comment_id' => $request->comment_id,
            'text' => nl2br($request->text),
            'user_id' => Auth::user()->id,
        ]);
        if($comment != null){
            $comment->load('reputation');
            return new CommentResource($comment);
        }
        return 'Error in store method';
    }
    public function delete(Request $request)
    {
        $request->validate([
            'id' => 'required',
        ]);

        $comment = Comment::find($request->id);
        
        if($comment->replies->count() == 0){
            $comment->forceDelete();
            return Response::json(null,200);
        }

        $comment->delete();

        return Response::json($comment,200);

    }
    public function update(Request $request)
    {
        $validated = $request->validate([
            'text' => 'required|min:1|max:2000',
            'id' => 'required',
        ]);
        $comment = Comment::find($validated['id']);
        $comment->text = nl2br($validated['text']);
        $comment->update();
        return $comment;
    }
    
}
