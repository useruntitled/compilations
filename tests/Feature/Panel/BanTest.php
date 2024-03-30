<?php

namespace Tests\Feature\Panel;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BanTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_admin_can_ban_user(): void
    {
        $user = User::notBanned()->inRandomOrder()->first();

        $this
            ->loginAsAdmin()
            ->putJson(route('panel.toggle.ban'), [
                'id' => $user->id,
            ])->assertOk();

        $this->assertTrue($user->refresh()->isBanned);
    }

    public function test_admin_can_unban_user(): void
    {
        $bannedUser = User::banned()->firstOrFail();

        $this
            ->loginAsAdmin()
            ->putJson(route('panel.toggle.ban'), [
                'id' => $bannedUser->id,
            ])
            ->assertOk();
        $this->assertFalse($bannedUser->refresh()->isBanned);
    }

    public function test_moder_can_ban_user(): void
    {
        $user = User::notBanned()->inRandomOrder()->first();

        $this
            ->loginAsModer()
            ->putJson(route('panel.toggle.ban'), [
                'id' => $user->id,
            ])
            ->assertOk();
        $this->assertTrue($user->refresh()->isBanned);
    }

    public function test_moder_can_unban_user(): void
    {
        $bannedUser = User::banned()->firstOrFail();

        $this
            ->loginAsModer()
            ->putJson(route('panel.toggle.ban'), [
                'id' => $bannedUser->id,
            ])
            ->assertOk();
        $this->assertFalse($bannedUser->refresh()->isBanned);
    }

    public function test_moder_cannot_ban_admin(): void
    {
        $this->loginAsAdmin();
        $admin = User::admin()->firstOrfail();

        $this->loginAsModer()
            ->putJson(route('panel.toggle.ban'), [
                'id' => $admin->id,
            ])->assertRedirect();

        $this->assertFalse($admin->refresh()->isBanned);
    }

    public function test_banned_user_cannot_do_users_actions(): void
    {
        $routes = [
            route('settings.profile'),
            route('comment.store'),
            route('post.store'),
        ];
        foreach ($routes as $route) {
            $this
                ->loginAsBanned()
                ->get($route)
                ->assertRedirect();
        }
    }

    public function test_user_cannot_ban_user(): void
    {
        $user = User::notBanned()->inRandomOrder()->first();

        $this
            ->login()
            ->putJson(route('panel.toggle.ban'), [
                'id' => $user->id,
            ])
            ->assertRedirect();
    }

    public function test_user_cannot_unban_user(): void
    {
        $bannedUser = User::banned()->inRandomOrder()->first();

        $this
            ->login()
            ->putJson(route('panel.toggle.ban'), [
                'id' => $bannedUser->id,
            ])
            ->assertRedirect();
    }
}
