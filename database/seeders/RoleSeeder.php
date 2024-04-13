<?php

namespace Database\Seeders;

use App\Enums\UserRole;
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
            'name' => UserRole::ADMIN,
        ]);

        Role::factory()->create([
            'name' => UserRole::MODER,
        ]);

        Role::factory()->create([
            'name' => UserRole::CREATOR,
        ]);

        Role::factory()->create([
            'name' => UserRole::USER,
        ]);
    }
}
