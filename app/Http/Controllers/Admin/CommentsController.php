<?php

namespace App\Http\Controllers\Admin;

use App\Events\CommentDeclinedEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\DeclineRequest;
use App\Models\Comment;
use App\Models\Report;
use App\Traits\UsesFilters;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    use UsesFilters;

    public function index(Request $request)
    {
        $comments = Comment::with(['image'])
            ->latest()
            ->withTrashed()
            ->when($request->input('search'), function ($query, $search) {
                $query->where('text', 'like', "%$search%")
                    ->orWhere('id', 'like', "%$search%");
            });

        $comments = $this->setFilter($comments)
            ->paginate(config('admin.per_page'))
            ->withQueryString();

        return inertia('Admin/Comments/Index', [
            'list' => $comments,
        ]);
    }

    public function view($id)
    {
        $comment = Comment::withTrashed()
            ->with(['declinedBy', 'image'])
            ->findOrFail($id);
        $reports_count = Report::where('report_to_id', $id)
            ->where('report_to_type', 'App\\Models\\Comment')
            ->get()
            ->count();


        return inertia('Admin/Comments/View', [
            'comment' => $comment,
            'reports_count' => $reports_count,
        ]);
    }

    public function decline(DeclineRequest $request)
    {
        $comment = Comment::findOrFail($request->id);
        $comment->text = Comment::DECLINED_TEXT;

        $comment->image()->delete();

        $comment->decline($request->reason);

        $comment->delete();

        $comment->save();

        event(new CommentDeclinedEvent($comment));
    }
}
