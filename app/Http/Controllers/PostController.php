<?php

namespace App\Http\Controllers;

use App\Actions\Post\PublishPost;
use App\Actions\Post\UpdatePost;
use App\Http\Requests\Post\UpdatePostRequest;
use App\Http\Requests\UploadFileRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;
use App\Policies\PostPolicy;
use App\Queries\Post\ViewPostQuery;
use App\Services\Media\MediaService;
use App\Services\PostService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function __construct(protected PostService $service)
    {
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
        $post = ViewPostQuery::get($id);

        return inertia('post', [
            'post' => PostResource::make($post),
        ]);
    }

    public function new()
    {
        $posts = $this->getNew(1);

        return inertia('Home/New', [
            'posts' => $posts,
        ]);
    }

    public function get(int $id)
    {
        return Post::mayBeUnpublished()
            ->with(['userRelation' => ['rolesRelation'], 'filmsRelation', 'mediaRelation'])
            ->findOrFail($id);
    }

    public function store(Request $request)
    {
        $post = Post::create([
            'user_id' => Auth::user()->id,
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return response()->json($post->load('userRelation'), 201);
    }

    public function delete(Request $request)
    {
        $post = Post::mayBeUnpublished()->findOrFail($request->id);

        $this->authorize(PostPolicy::DELETE, $post);

        $post->forceDelete();

        return response()->json('');
    }

    public function update(UpdatePostRequest $request)
    {
        $post = Post::mayBeUnpublished()
            ->with('filmsRelation')
            ->findOrFail($request->id);

        $this->authorize(PostPolicy::UPDATE, $post);

        $post = UpdatePost::handle($post, $request->validated());

        return response()->json($post);
    }

    public function publish(Request $request)
    {
        $post = Post::mayBeUnpublished()->findOrFail($request->id);

        $this->authorize(PostPolicy::PUBLISH, $post);

        PublishPost::handle($post);

        return route('post', [$post->id, $post->slug]);
    }

    public function uploadImage(UploadFileRequest $request, MediaService $media)
    {
        $post = Post::mayBeUnpublished()->findOrFail($request->id);

        return $media->upload($request->file('image'), $post)->toJson();
    }

    public function redirect($id)
    {
        $slug = Post::mayBeUnpublished()->findOrFail($id)->slug;

        return redirect()->route('post', [$id, $slug]);
    }

    public function getNew($page)
    {
        return $this->service->getNew($page);
    }

    public function getRandom(?int $page, int $post_id)
    {
        return $this->service->getRandom($page, $post_id);
    }

    public function getPopular($page)
    {
        return $this->service->getPopular($page);
    }

    public function getMostCommented($page)
    {
        return $this->service->getMostCommented($page);
    }
}
