<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostUploadImageRequest;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UploadFileRequest;
use App\Models\Film;
use App\Models\Post;
use App\Services\ImageService;
use App\Services\PostService;
use Illuminate\Http\Request;
use Illuminate\Session\Store;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;

class PostController extends Controller
{
    protected PostService $service;

    protected int $per_page;

    public function __construct(PostService $serivce)
    {
        $this->service = $serivce;
        $this->per_page = config('post.per_page');
    }

    public function drafts()
    {
        $drafts = $this->service->getDrafts();
        return inertia('Auth/Drafts', [
            'drafts' => $drafts,
        ]);
    }

    public function index(int $id, ?string $slug)
    {
        $post = Cache::remember("post-$id", now()->addMinutes(5), function () use ($id, $slug) {
            return Post::with([
                'user' => ['roles'],
                'films' => ['genres'],
                ])
                ->withCount(['comments', 'bookmarks'])
                ->published()
                ->findOrFail($id);
        });

        $this->service->countVisit($post);

        return inertia('post', [
            'post' => $post,
        ]);
    }

    public function new()
    {
        $posts = $this->getNew(1);
        $this->service->countView($posts);
        return inertia('Home/New', [
            'posts' => $posts,
        ]);
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

    public function delete(Request $request)
    {
        $post = Post::findOrFail($request->id);
        $post->forceDelete();
        return 204;
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

            $post->films()->attach(array_unique($array_of_ids));
        }
//        else {
//            if (count($films) == 0 && count($post->films) > 0) {
//                $post->films()->detach();
//            }
//        }

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

        if (! $post->isActive) {
            if($post->title != null && $post->films()->count() > 0) {
                if(! $post->published_at) $post->published_at = now();
                $post->save();
            } else {
                abort(422);
            }
        }
        Cache::tags(['posts'])->flush();
        return route('post', [$post->id, $post->slug]);
    }

    public function postAttachFilm(Request $request)
    {
        $post = Post::find($request->post_id);
        if ($post == null) {
            return response()->json('', 404);
        }

        $film = Film::find($request->id);
        if ($film == null) {
            $film = (new FilmController())->create($request->id);
        }

        if ($post->films->contains($film->id)) {
            abort(422, 'Вы не можете прикрепить один и тот же фильм дважды.');
        }

        $post->films()->attach($film->id);
        $post->save();

        return response()->json($film, 200);
    }


    public function uploadImage(UploadFileRequest $request, ImageService $service)
    {
        $post = Post::findOrFail($request->id);

        $filename = $service->uploadAndDelete($request->file('image'), $post->image);

        $post->image = $filename;
        $post->update();

        return Response::json($filename, 200);
    }

    public function redirect($id)
    {
        $slug = Post::find($id)->slug;
        return redirect()->route('post',[$id, $slug]);
    }

    public function getNew($page)
    {
        $posts = $this->service->getNew($page);
        $this->service->countView($posts);
        return $posts;
    }

    public function getRandom(?int $page, int $post_id)
    {
        $posts =  $this->service->getRandom($page, $post_id);
        $this->service->countView($posts);
        return $posts;
    }

    public function getPopular($page)
    {
        $posts = $this->service->getPopular($page);
        $this->service->countView($posts);
        return $posts;
    }
}
