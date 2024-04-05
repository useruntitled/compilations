<?php

namespace App\Http\Controllers\Admin;

use App\Events\PostDeclinedEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\Report;
use App\Traits\UsesFilters;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostsController extends Controller
{
    use UsesFilters;

    public function index(Request $request)
    {
        $posts = Post::latest()
            ->when($request->input('search'), function ($query, $search) {
                $query->where('title', 'like', "%$search%")
                    ->orWhere('id', 'like', "%$search%");
            });
        $posts = $this->setFilter($posts)
            ->paginate(config('admin.per_page'))
            ->withQueryString();

        return inertia('Admin/Posts/Index', [
            'list' => $posts,
            'filter' => $request->filter ?? null,
        ]);
    }

    public function view($id)
    {
        $post = Post::with('declinedBy')->findOrFail($id);
        $reports_count = Report::where('report_to_id', '=', $id)
            ->where(
                'report_to_type',
                Relation::getMorphedModel('post')
            )
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
        $post->decline($request->reason);

        event(new PostDeclinedEvent($post));
    }
}
