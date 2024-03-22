<?php

namespace Tests;

use App\Models\User;

trait CreatesUsers
{
    protected function loginAs(User $user)
    {
        $this->actingAs($user);
        return $this;
    }

    protected function login()
    {
        $user = $this->createUser();
        $this->loginAs($user);
        return $this;
    }

    protected function createUser()
    {
        return User::factory()->create();
    }
}
