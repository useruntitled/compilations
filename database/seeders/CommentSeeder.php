<?php

namespace Database\Seeders;

use App\Enums\CommentText;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentSeeder extends Seeder
{
    protected $userIds;

    protected $postIds;

    public function run(): void
    {
        $this->userIds = array_flip(DB::table('users')->pluck('id')->toArray());
        $this->postIds = array_flip(Post::all()->pluck('id')->toArray());

        $comments = Comment::factory()
            ->count(count($this->userIds))
            ->state(new Sequence(fn () => [
                'user_id' => array_rand($this->userIds),
                'post_id' => array_rand($this->postIds),
            ], [
                'user_id' => array_rand($this->userIds),
                'post_id' => array_rand($this->postIds),
                'deleted_at' => now(),
                'text' => CommentText::DELETED_TEXT,
            ], [
                'user_id' => array_rand($this->userIds),
                'post_id' => array_rand($this->postIds),
                'text' => CommentText::DECLINED_TEXT,
                'declined_at' => now(),
                'declined_by' => array_rand($this->userIds),
                'declined_reason' => 'Some reason',
            ]))
            ->create();
        foreach ($comments as $comment) {
            $this->makeReplies($comment, 10);
        }
    }

    protected function makeReplies($comment, int $maxLevel)
    {
        $replies = Comment::factory()
            ->count(mt_rand(0, 2))
            ->state(new Sequence([
                'user_id' => array_rand($this->userIds),
                'comment_id' => $comment->id,
                'post_id' => $comment->post_id,
                'level' => $comment->level + 1,
            ], [
                'user_id' => array_rand($this->userIds),
                'comment_id' => $comment->id,
                'post_id' => $comment->post_id,
                'level' => $comment->level + 1,
                'deleted_at' => now(),
            ], [
                'user_id' => array_rand($this->userIds),
                'comment_id' => $comment->id,
                'post_id' => $comment->post_id,
                'level' => $comment->level + 1,
                'declined_at' => now(),
                'declined_reason' => 'Some reason',
                'declined_by' => array_rand($this->userIds),
            ]))
            ->create();
        if ($comment->level + 1 <= $maxLevel) {
            foreach ($replies as $reply) {
                $this->makeReplies($reply, $maxLevel);
            }
        }
    }
}
