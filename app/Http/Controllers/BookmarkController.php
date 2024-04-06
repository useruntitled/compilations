<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookmarkController extends Controller
{
    public function index()
    {
        $bookmarks = Bookmark::with([
            'post.user',
            'post.films.genres',
        ])
            ->where('user_id', Auth::id())
            ->get();

        $posts = [];

        foreach ($bookmarks as $bookmark) {
            $bookmark->post->loadCount(['comments', 'bookmarks']);
            $posts[] = $bookmark->post;
        }

        return inertia('Auth/Bookmarks', [
            'posts' => $posts,
        ]);
    }

    public function toggle(Request $request)
    {
        $request->validate([
            'post_id' => 'required|exists:posts,id',
        ]);

        $bookmark = Bookmark::where('post_id', $request->post_id)
            ->where('user_id', Auth::id())
            ->first();

        if ($bookmark) {
            $bookmark->delete();
            $bookmark = null;
        } else {
            $bookmark = Bookmark::create([
                'post_id' => $request->post_id,
                'user_id' => Auth::id(),
            ]);
        }

        return response()->json($bookmark);
    }
}
