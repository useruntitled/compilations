<?php

namespace Database\Seeders;

use App\Models\Film;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::factory()
            ->count(2)
            ->has(Post::factory()
                ->has(Film::factory()->count(mt_rand(2, 20)))
                ->count(2))
            ->has(Post::factory()->state(new Sequence(['published_at' => null])))
            ->create();
        foreach ($users as $user) {
            $user->makeAvatar();
        }

        $bannedUser = User::factory()
            ->state([
                'banned_at' => now(),
                'banned_by' => array_rand(array_flip($users->pluck('id')->toArray())),
            ])
            ->create();
        $bannedUser->makeAvatar();
    }
}
