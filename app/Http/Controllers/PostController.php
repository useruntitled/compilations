<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Post;
use App\Services\ImageService;
use App\Services\PostService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class PostController extends Controller
{
    protected PostService $service;

    public function __construct(PostService $serivce)
    {
        $this->service = $serivce;
    }

    public function index($id, $slug)
    {
        $post = Post::with([
            'user' => ['roles'],
            'films' => ['genres'],
        ])->withCount(['comments', 'bookmarks'])->findOrFail($id);

        return inertia('post', [
            'post' => $post,
        ]);
    }

    public function new()
    {
        $posts = $this->getNew(1);

        return inertia('home/New', [
            'posts' => $posts,
        ]);
    }

    public function getNew($page)
    {
        $posts = Post::with(['user' => ['roles'], 'reputation', 'films' => ['genres']])->published()
            ->withCount(['comments', 'bookmarks', 'films'])
            ->latest()
            ->skip(($page - 1) * config('post.per_page'))
            ->take(config('post.per_page'))
            ->get();

        $result = [];

        for ($i = 0; $i < $posts->count(); $i++) {
            $result[chr(97 + $i)] = $posts[$i];
        }

        return $posts;
    }

    public function getRandom($page)
    {
        $posts = Post::with(['user' => ['roles'], 'films', 'reputation'])
            ->where('active', 1)
            ->withCount(['comments', 'bookmarks', 'films'])
            ->inRandomOrder()
            ->skip(($page - 1) * config('post.per_page'))
            ->take(config('post.per_page'))
            ->get();

        return $posts;
    }

    public function getPopular($page)
    {
        $posts = $this->service->getPopular($page);

        $result = [];

        for ($i = 0; $i < $posts->count(); $i++) {
            $result[chr(97 + $i)] = $posts[$i];
        }

        return $posts;
    }

    public function create()
    {
        return inertia('create/index');
    }

    public function get(int $id)
    {
        $post = Post::with(['user' => ['roles'], 'films'])->findOrFail($id);

        return $post;
    }

    public function store(Request $request)
    {
        $post = Post::create([
            'user_id' => Auth::user()->id,
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return Response::json($post->load('user'), 200);
    }

    public function update(Request $request)
    {
        $post = Post::with('films')->findOrFail($request->id);

        $films = $request->films;

        if ($films != null && count($films) > 0) {
            if (count($post->films) > 0) {
                $post->films()->detach();
            }

            $array_of_ids = [];
            foreach ($films as $film) {
                $array_of_ids[] = $film['id'];
            }

            $post->films()->attach(array_unique($array_of_ids), ['created_at' => now()]);
        } else {
            if (count($films) == 0 && count($post->films) > 0) {
                $post->films()->detach();
            }
        }

        $post->update([
            'title' => $request->title,
            'description' => nl2br($request->description),
            'slug' => Str::slug($request->title),
        ]);
        $post->save();

        return Response::json($post, 200);
    }

    public function publish(Request $request)
    {
        $post = Post::find($request->id);

        if (! $post->active) {
            $post->active = true;
            $post->published_at = now();
            $post->save();
        }

        return route('post', [$post->id, $post->slug]);
    }

    public function postAttachFilm(Request $request)
    {
        $post = Post::find($request->post_id);
        if ($post != null) {
            $film = Film::find($request->id);
            if ($film == null) {
                $film = (new FilmController())->create($request->id);
            }
            $post->films()->each(function ($f) use ($film) {
                if ($f->id == $film->id) {
                    abort(422, 'Вы не можете прикрепить один и тот же фильм дважды.');
                }
            });
            $post->films()->attach($film->id);
            $post->save();

            return Response::json($film, 200);
        }

        return Response::json('', 404);
    }

    public function postDettachFilm(Request $request)
    {
        $post = Post::find($request->post_id);
        if ($post != null) {
            $film = Film::find($request->id);
            $post->films()->detach($film->id);
            $post->save();

            return Response::json('', 200);
        }

        return Response::json('', 404);
    }

    public function edit($id, $slug)
    {
        $draft = Post::where('id', $id)->where('user_id', Auth::user()->id)->firstOrFail();

        return inertia('create/index', [
            'post' => $draft->load('films'),
        ]);
    }

    public function destroy(Request $request)
    {
        $post = Post::find($request->id);
        if ($post->user->id == Auth::user()->id) {
            $post->delete();

            return Response::json('', 202);
        }

        return Response::json('', 403);
    }

    public function uploadImage(Request $request, ImageService $service)
    {
        $request->validate([
            'id' => 'required',
            'image' => 'required',
        ]);

        if (! $request->hasFile('image')) {
            abort(422);
        }

        $post = Post::findOrFail($request->id);

        $file = $request->file('image');
        $filename = $service->uploadAndDelete($file, $post->image);

        $post->image = $filename;
        $post->update();

        return Response::json($filename, 200);
    }
}
