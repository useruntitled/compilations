<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userIds = array_flip(DB::table('users')->pluck('id')->toArray());
        $postIds = array_flip(Post::all()->pluck('id')->toArray());

        $comments = Comment::factory()
            ->count(count($postIds))
            ->state(new Sequence(fn () => [
                'user_id' => array_rand($userIds),
                'post_id' => array_rand($postIds),
            ]))
            ->create();

        foreach ($comments as $comment) {
            Comment::factory()
                ->count(mt_rand(0, 2))
                ->state(new Sequence(fn () => [
                    'user_id' => array_rand($userIds),
                    'post_id' => $comment->post->id,
                    'comment_id' => $comment->id,
                    'level' => 1,
                ]))
                ->create();
        }

        $replies = Comment::where('level', '=', 1)->get();
        foreach ($replies as $reply) {
            Comment::factory()
                ->count(mt_rand(0, 1))
                ->state(new Sequence(fn () => [
                    'user_id' => array_rand($userIds),
                    'post_id' => $reply->post->id,
                    'comment_id' => $reply->id,
                    'level' => 2,
                ]))
                ->create();
        }
    }
}
