<?php

namespace App\Http\Controllers;

use App\Http\Requests\Bookmark\DestroyBookmarkRequest;
use App\Http\Requests\Bookmark\StoreBookmarkRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Bookmark;

class BookmarkController extends Controller
{
    public function index()
    {
        return inertia('Auth/Bookmarks', [
            'posts' => $this->get(),
        ]);
    }

    public function get(?int $page = 1)
    {
        $bookmarks = Bookmark::with([
            'postRelation' => ['userRelation', 'filmsRelation' => ['genresRelation']],
        ])
            ->where('user_id', auth()->user()->id)
            ->skip(($page - 1) * config('post.per_page'))
            ->take(config('post.per_page'))
            ->get();

        $posts = [];

        foreach ($bookmarks as $bookmark) {
            $bookmark->postRelation->loadCount(['commentsRelation', 'bookmarksRelation']);
            $posts[] = $bookmark->postRelation;
        }

        return PostResource::collection($posts);
    }

    public function store(StoreBookmarkRequest $request)
    {
        Bookmark::create([
            'user_id' => auth()->user()->id,
            'post_id' => $request->post_id,
        ]);

        return response()->json('', 201);
    }

    public function destroy(DestroyBookmarkRequest $request)
    {
        $bookmark = Bookmark::where('post_id', $request->post_id);
        $bookmark->delete();

        return response()->json('', 204);
    }
}
