<?php

namespace Tests\Feature\Panel;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RolesTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_admin_can_add_moder_role_to_user(): void
    {
        $user = User::inRandomOrder()->first();

        $this
            ->loginAsAdmin()
            ->postJson(route('panel.user.add.role.moder'), [
                'id' => $user->id,
            ])->assertCreated();

        $this->assertTrue($user->refresh()->isModer);
    }

    public function test_admin_can_demote_moder(): void
    {
        $moder = $this->createModer();

        $this
            ->loginAsAdmin()
            ->deleteJson(route('panel.user.remove.role.moder'), [
                'id' => $moder->id,
            ])->assertNoContent();

        $this->assertFalse($moder->refresh()->isModer);
    }

    public function test_moder_cannot_add_moder_role_to_user(): void
    {
        $user = User::inRandomOrder()->first();

        $this
            ->loginAsModer()
            ->postJson(route('panel.user.add.role.moder'), [
                'id' => $user->id,
            ])->assertRedirect();
    }

    public function test_moder_cannot_demote_moder(): void
    {
        $moder = $this->createModer();

        $this
            ->loginAsModer()
            ->deleteJson(route('panel.user.remove.role.moder'), [
                'id' => $moder->id,
            ])->assertRedirect();
    }

    public function test_moder_role_cannot_be_added_twice(): void
    {
        $moder = $this->createModer();

        $this->loginAsAdmin()
            ->postJson(route('panel.user.add.role.moder'), [
                'id' => $moder->id,
            ])->assertRedirect();
    }

    public function test_user_cannot_add_moder_role_to_user(): void
    {
        $user = User::inRandomOrder()->first();

        $this
            ->login()
            ->postJson(route('panel.user.add.role.moder'), [
                'id' => $user->id,
            ])->assertRedirect();
    }

    public function test_user_cannot_demote_moder(): void
    {
        $moder = $this->createModer();

        $this
            ->login()
            ->deleteJson(route('panel.user.remove.role.moder'), [
                'id' => $moder->id,
            ])->assertRedirect();
    }
}
