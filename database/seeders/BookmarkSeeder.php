<?php

namespace Database\Seeders;

use App\Models\Bookmark;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class BookmarkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $postIds = Post::all()->pluck('id')->toArray();
        $userIds = array_flip(User::notBanned()->get()->pluck('id')->toArray());

        foreach ($postIds as $postId) {
            Bookmark::factory()
                ->count(mt_rand(0, 5))
                ->state(new Sequence([
                    'post_id' => $postId,
                    'user_id' => array_rand($userIds),
                ]))
                ->create();
        }
    }
}
