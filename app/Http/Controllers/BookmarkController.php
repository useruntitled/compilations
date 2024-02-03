<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookmarkController extends Controller
{
    const PER_PAGE = 5;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookmarks = Bookmark::with(['post.user', 'post.films'])->where('user_id', Auth::id())->get();

        $posts = [];

        foreach($bookmarks as $bookmark) {
            $bookmark->post->loadCount(['comments', 'bookmarks']);
            $posts[] = $bookmark->post;
        }

        return inertia('Auth/Bookmarks', [
            'posts' => $posts
        ]);
    }

    public function getMyBookmarkedPosts($page)
    {
        $bookmarks = Bookmark::with(['post.user', 'post.films'])
        ->where('user_id', Auth::id())
        ->skip(($page - 1) * self::PER_PAGE)
        ->take(self::PER_PAGE)
        ->get();

        $posts = [];

        foreach($bookmarks as $bookmark) {
            $bookmark->post->loadCount(['comments', 'bookmarks']);
            $posts[] = $bookmark->post;
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function toggle(Request $request)
    {
        $request->validate([
            'post_id' => 'required|exists:posts,id',
        ]);

        $bookmark = Bookmark::where('post_id', $request->post_id)->where('user_id', Auth::id())->first();

        if($bookmark) {
            $bookmark->delete();
            $bookmark = null;
        } else {
            $bookmark = Bookmark::create([
                'post_id' => $request->post_id,
                'user_id' => Auth::id(),
            ]);
        }
        return $bookmark;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'post_id' => 'required|exists:posts,id',
        ]);

        $bookmark = Bookmark::create([
            'post_id' => $request->post_id,
            'user_id' => Auth::id(),
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Bookmark $bookmark)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bookmark $bookmark)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bookmark $bookmark)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bookmark $bookmark)
    {
        //
    }
}
