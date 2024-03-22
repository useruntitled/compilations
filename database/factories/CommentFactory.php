<?php

namespace Database\Factories;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => $attributes['user_id'] ?? User::factory(),
            'post_id' => $attributes['post_id'] ?? Post::factory(),
            'comment_id' => $attributes['comment_id'] ?? null,
            'level' => 0,
            'text' => fake()->words(mt_rand(1, 20), true),
        ];
    }
}
