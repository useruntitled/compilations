<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Post;
use App\Models\Reputation;
use App\Models\User;
use Database\Factories\ReputationFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Seeder;

class ReputationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = Post::all()->pluck('id')->toArray();
        $comments = Comment::all()->pluck('id')->toArray();
        $users = User::all()->pluck('id')->toArray();

        $commentType = Relation::getMorphedModel('comment');
        $postType = Relation::getMorphedModel('post');

        foreach ($posts as $p) {
            Reputation::factory()
                ->count(mt_rand(0, 1))
                ->state([
                    'user_id' => array_rand(array_flip($users)),
                    'reputation_to_id' => $p,
                    'reputation_to_type' => $postType,
                ])
                ->create();
        }

        foreach ($comments as $c) {
            Reputation::factory()
                ->count(mt_rand(0, 1))
                ->state([
                    'user_id' => array_rand(array_flip($users)),
                    'reputation_to_id' => $c,
                    'reputation_to_type' => $commentType,
                ])
                ->create();
        }


    }
}
