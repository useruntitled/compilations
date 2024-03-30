<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reputation>
 */
class ReputationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $type = fake()->randomElement(['post', 'comment']);

        return [
            'reputation_to_type' => Relation::getMorphedModel($type),
            'action' => fake()->randomElement(['up', 'down']),
        ];
    }
}
