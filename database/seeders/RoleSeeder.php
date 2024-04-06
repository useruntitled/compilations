<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::factory()->create([
            'name' => Role::ADMIN,
        ]);

        Role::factory()->create([
            'name' => Role::MODER,
        ]);

        Role::factory()->create([
            'name' => Role::CREATOR,
        ]);

        Role::factory()->create([
            'name' => Role::USER,
        ]);
    }
}
