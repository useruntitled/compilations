<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Report;
use App\Services\Media\MediaService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentsController extends Controller
{
    public function index(Request $request)
    {
        $comments = Comment::with(['image'])
            ->latest()
            ->published()
            ->paginate(config('admin.per_page'));

        return inertia('Admin/Comments/Index', [
            'comments' => $comments,
        ]);
    }

    public function view($id)
    {
        $comment = Comment::with(['declinedBy', 'image'])->findOrFail($id);
        $reports_count = Report::where('report_to_id', '=', $id)->where('report_to_type', '=', 'App\\Models\\Comment')->get()->count();


        return inertia('Admin/Comments/View', [
            'comment' => $comment,
            'reports_count' => $reports_count,
        ]);
    }

    public function decline(Request $request)
    {
        $comment = Comment::findOrFail($request->id);
        $comment->text = Comment::DECLINED_TEXT;
        if ($comment->image) {
            MediaService::delete($comment->image);
            $comment->image()->delete();
        }
        $comment->declined_by = Auth::id();
        $comment->declined_reason = $request->reason;
        $comment->declined_at = now();
        $comment->deleted_at = now();
        $comment->save();
    }
}
