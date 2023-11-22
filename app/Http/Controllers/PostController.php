<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Film;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index($id,$slug)
    {
        $post = Post::find($id);
        if($post == null){
            abort(404);
        }
        foreach($post->films as $film){
            $film->load('genres');
        }
        return inertia('post',[
            'post' => new PostResource($post),
        ]);
    }
    public function create()
    {
        return inertia('create/index');
    }
    public function finish($id)
    {   
        $post = Post::where('id',$id)->with(['films','user','tags'])->first();
        if($post != null){
            if($post->user->id != Auth::user()->id){
                abort(403);
            }
            foreach($post->films as $film){
                $film->load('genres');
            }
            return inertia('create/finish',[
                'post' => $post,
            ]);
        }
        abort(404);
        
    }
    public function store(StorePostRequest $request)
    {
        $post = Post::create([
            'user_id' => Auth::user()->id,
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => nl2br($request->description),
        ]);
        $path = $post->id . '.png';
        $image = $request->file('image')->storeAs(null,$path,'public');
        
        if($post == null){
            return Response::json('',500);
        }
        return Response::json($post,200);
    }
    public function update(UpdatePostRequest $request)
    {
        $post = Post::find($request->post_id);
        $post->update([
            'title' => $request->title,
            'description' => nl2br($request->description),
        ]);
        $post->save();
        if($request->hasFile('image')){
            $path = $post->id . '.png';
            $image = $request->file('image')->storeAs(null,$path,'public');
        }
        return Response::json($post,200);
    }
    public function publish(Request $request)
    {
        $post = Post::find($request->id);
        $post->active = true;
        $post->save();
        return Response::json('',200);
    }
    public function postAttachFilm(Request $request)
    {
        $post = Post::find($request->post_id);
        if($post != null){
            $film = Film::find($request->id);
            if($film == null){
                $film = (new FilmController())->create($request->id);
            }
            $post->films()->each(function($f)use($film){
                if($f->id == $film->id){
                    abort(422,'Вы не можете прикрепить один и тот же фильм дважды.');
                }
            });
            $post->films()->attach($film->id);
            $post->save();
            return Response::json($film,200);
        }
        return Response::json('',404);
    }
    public function postDettachFilm(Request $request)
    {
        $post = Post::find($request->post_id);
        if($post != null){
            $film = Film::find($request->id);
            $post->films()->detach($film->id);
            $post->save();
            return Response::json('',200);
        }
        return Response::json('',404);
    }
    public function edit($id,$slug)
    {
        $draft = Post::where('id',$id)->where('user_id',Auth::user()->id)->firstOrFail();
        return inertia('create/index',[
            'post' => $draft->load('films'),
        ]);
    }
    public function destroy(Request $request)
    {
        $post = Post::find($request->id);
        if($post->user->id == Auth::user()->id){
            $post->delete();
            return Response::json('',202);
        }
        return Response::json('',403);
    }
}
