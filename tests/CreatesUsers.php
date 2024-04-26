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

    protected function loginAsAdmin(): self
    {
        $user = $this->createUser();
        $user->toAdmin();
        $this->loginAs($user);

        return $this;
    }

    protected function loginAsModer(): self
    {
        $user = $this->createUser();
        $user->toModer();
        $this->loginAs($user);

        return $this;
    }

    protected function loginAsBanned(): self
    {
        $user = $this->createUser();
        $user->ban('Some ban reason');
        $this->loginAs($user);

        return $this;
    }

    protected function login(): self
    {
        $user = $this->createUser();
        $this->loginAs($user);

        return $this;
    }

    protected function createUser(): User
    {
        return User::factory()->create();
    }

    protected function createModer(): User
    {
        $user = $this->createUser();
        $user->toModer();

        return $user;
    }

    protected function createAdmin(): User
    {
        $user = $this->createUser();
        $user->toAdmin();

        return $user;
    }
}
