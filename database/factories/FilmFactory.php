<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Film>
 */
class FilmFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => fake()->unique()->numberBetween(0, 1000),
            'name_ru' => fake()->words(mt_rand(1, 10), true),
            'description' => fake()->words(mt_rand(0, 100), true),
            'poster_url' => array_rand(array_flip(['https://image.openmoviedb.com/kinopoisk-images/4303601/3eabac99-fb98-4b12-ba9f-6172782d54c6/x1000', 'https://image.openmoviedb.com/kinopoisk-images/10809116/ae8e60dc-bae8-4f78-8c82-c6ff5402f097/x1000'])),
            'year' => fake()->year(),
            'type' => array_rand(array_flip(['movie', 'serial'])),
        ];
    }
}
