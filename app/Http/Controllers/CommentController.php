<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class CommentController extends Controller
{
    public function create(Request $request)
    {
        $validated = $request->validate([
            'text' => 'required|min:1|max:2000',
            'post_id' => 'required',
        ]);
        return Response::json($this->store($validated),200);

    }
    public function store($attrs){
        $comment = Comment::create([
            'post_id' => $attrs['post_id'],
            'text' => nl2br($attrs['text']),
            'user_id' => Auth::user()->id,
        ]);
        if($comment != null){
            return new CommentResource($comment);
        }
        return 'Error in store method';
    }
    public function delete(Request $request)
    {
        Comment::destroy($request->id);
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
        return Response::json($comment,200);
    }
    
}
