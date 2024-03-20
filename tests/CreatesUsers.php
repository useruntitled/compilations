<?php

namespace Tests;

use App\Models\User;

trait CreatesUsers
{
    protected function loginAs(User $user)
    {
        $this->actingAs($user);
    }

    protected function login(User $user)
    {
        $user = $this->createUser();
        $this->loginAs($user);
        return $user;
    }

    protected function createUser()
    {
        return User::factory()->create();
    }
}
