<?php

namespace Tests\Feature\Panel;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RolesTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_admin_can_grant_moder_role_to_user(): void
    {
        $user = User::inRandomOrder()->first();

        $this
            ->loginAsAdmin()
            ->putJson(route('panel.user.toggle.moder'), [
                'id' => $user->id,
            ])->assertStatus(200);

        $this->assertTrue($user->refresh()->is_moder);
    }

    public function test_admin_can_demote_moder(): void
    {
        $user = User::inRandomOrder()->first();
        $user->toModer();

        $this
            ->loginAsAdmin()
            ->putJson(route('panel.user.toggle.moder'), [
                'id' => $user->id,
            ])->assertStatus(200);

        $this->assertFalse($user->refresh()->is_moder);
    }

    public function test_moder_cannot_grant_moder_role_to_user(): void
    {
        $user = User::inRandomOrder()->first();

        $this
            ->loginAsModer()
            ->putJson(route('panel.user.toggle.moder'), [
                'id' => $user->id,
            ])->assertRedirect();
    }

    public function test_moder_cannot_demote_moder(): void
    {
        $user = User::inRandomOrder()->first();
        $user->toModer();

        $this
            ->loginAsModer()
            ->putJson(route('panel.user.toggle.moder'), [
                'id' => $user->id,
            ])->assertRedirect();
    }

    public function test_user_cannot_grant_moder_role_to_user(): void
    {
        $user = User::inRandomOrder()->first();
        $user->toModer();

        $this
            ->login()
            ->putJson(route('panel.user.toggle.moder'), [
                'id' => $user->id,
            ])->assertRedirect();
    }

    public function test_user_cannot_demote_moder(): void
    {
        $user = User::inRandomOrder()->first();
        $user->toModer();

        $this
            ->login()
            ->putJson(route('panel.user.toggle.moder'), [
                'id' => $user->id,
            ])->assertRedirect();
    }
}
