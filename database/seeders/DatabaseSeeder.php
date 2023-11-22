<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $role_admin = Role::factory()->create([
            'role' => 'admin'
        ]);
        Role::factory()->create(['role' => 'user']);
        $role_creator = Role::factory()->create(['role' => 'creator']);
        $this->command->info('Roles is created');
        $password = fake()->uuid();
        $this->command->info('Password is generated');
        // $admin = User::factory()->create([
        //     'password' => $password,
        // ]);
        $admin = User::create([
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => $password, // password
            'remember_token' => Str::random(10),
        ]);
        $this->command->info('Admin user is created:');
        $admin->roles()->attach([$role_admin->id,$role_creator->id]);
        $admin->save();
        $this->command->info('Email: ' . $admin->email);
        $this->command->info('Password: ' . $password);

    }
}
