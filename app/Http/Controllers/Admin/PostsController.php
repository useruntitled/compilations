<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->paginate(config('admin.per_page'));

        return inertia('Admin/Posts/Index', [
            'posts' => $posts,
        ]);
    }

    public function view($id)
    {
        $post = Post::with('declinedBy')->findOrFail($id);
        $reports_count = Report::where('report_to_id', '=', $id)
            ->where('report_to_type', '=', 'App\\Models\\Post')
            ->get()
            ->count();
        return inertia('Admin/Posts/View', [
            'post' => $post,
            'reports_count' => $reports_count,
        ]);
    }

    public function decline(Request $request)
    {
        $post = Post::findOrFail($request->id);
        $post->declined_by = Auth::id();
        $post->declined_reason = $request->reason;
        $post->declined_at = now();
        $post->save();
    }
}
