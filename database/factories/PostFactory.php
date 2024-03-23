<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use App\Services\Media\ImageGeneratorService;
use App\Services\Media\MediaUploader;
use Closure;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->words(mt_rand(2, 20), true);
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => fake()->words(mt_rand(0, 200), true),
            'user_id' => $attributes['user_id'] ?? User::factory(),
            'published_at' => fake()->dateTimeBetween('-6 months'),
        ];
    }

    public function configure(): static
    {
        return $this->afterMaking(function (Post $post) {

        })->afterCreating(function (Post $post) {
            $has = (bool)mt_rand(0, 1);
            if ($has) {
                $image = ImageGeneratorService::make(mt_rand(10, 2000), mt_rand(10, 2000));
                MediaUploader::upload($image, $post);
            }
        });
    }
}
