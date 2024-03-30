<?php

namespace Database\Seeders;


use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\App;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);

        if (!App::environment('production')) {
            $this->call(UserSeeder::class);
            $this->call(CommentSeeder::class);
            $this->call(ReputationSeeder::class);
        }
    }
}
