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

    protected function loginAsAdmin()
    {
        $user = $this->createUser();
        $user->toAdmin();
        $this->loginAs($user);
        return $this;
    }

    protected function loginAsModer()
    {
        $user = $this->createUser();
        $user->toModer();
        $this->loginAs($user);
        return $this;
    }

    protected function loginAsBanned()
    {
        $user = $this->createUser();
        $user->ban('Some ban reason');
        $this->loginAs($user);
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
