<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
Use Illuminate\Support\Str;

class TagController extends Controller
{
    public function index($slug)
    {
        $tag = Tag::where('slug',$slug)->first();
        $posts = Post::whereHas('tags',function($query) use ($tag){
            $query->where('name',$tag->name);
        })->get();
        $posts->each(fn($post) => $post->load('tags'));
        return inertia('Tag',[
            'tag' => $tag,
            'posts' => PostResource::collection($posts),
        ]);
    }
    public function attach(Request $request)
    {
        $post = Post::find($request->post_id);
        $tag = Tag::where('name',$request->name)->first();
        if($tag == null){
            $tag = Tag::create([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
            ]);
        }
        if($post->tags != null){
            foreach($post->tags as $post_tag){
                if($post_tag == $tag){
                    abort(409);
                }
            }
        }
        $post->tags()->attach($tag->id);
        $post->save();
        return Response::json($tag,200);
    }
    public function detach(Request $request)
    {
        $post = Post::find($request->post_id);
        $tag = Tag::find($request->tag_id);
        $post->tags()->detach($tag->id);
        $post->save();
    }
}
