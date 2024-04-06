<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class MakeUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:make-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $this->info('Generating new user');
        $password = fake()->uuid();
        $this->info('Password is generated');
        $user = User::create([
            'name' => fake()->name(),
            'username' => fake()->firstName(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => $password, // password
            'remember_token' => Str::random(10),
        ]);
        $user->makeAvatar();

        $this->info('Email: '.$user->email);
        $this->info('Password: '.$password);
    }
}
