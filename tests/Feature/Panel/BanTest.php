<?php

namespace Tests\Feature\Panel;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BanTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_admin_can_ban_user(): void
    {
        $user = User::notBanned()->banAble()->inRandomOrder()->firstOrFail();

        $this
            ->loginAsAdmin()
            ->putJson(route('panel.user.ban'), [
                'id' => $user->id,
                'reason' => 'Some reason',
            ])->assertOk();

        $this->assertTrue($user->refresh()->isBanned);
    }

    public function test_admin_can_unban_user(): void
    {
        $bannedUser = User::banned()->banAble()->firstOrFail();

        $this
            ->loginAsAdmin()
            ->putJson(route('panel.user.unban'), [
                'id' => $bannedUser->id,
            ])
            ->assertOk();

        $this->assertFalse($bannedUser->refresh()->isBanned);
    }

    public function test_moder_can_ban_user(): void
    {
        $user = User::notBanned()->banAble()->inRandomOrder()->firstOrFail();

        $this
            ->loginAsModer()
            ->putJson(route('panel.user.ban'), [
                'id' => $user->id,
                'reason' => 'Some reason',
            ])->assertOk();

        $this->assertTrue($user->refresh()->isBanned);
    }

    public function test_moder_can_unban_user(): void
    {
        $bannedUser = User::banned()->banAble()->firstOrFail();

        $this
            ->loginAsModer()
            ->putJson(route('panel.user.unban'), [
                'id' => $bannedUser->id,
            ])
            ->assertOk();

        $this->assertFalse($bannedUser->refresh()->isBanned);
    }

    public function test_moder_cannot_ban_admin(): void
    {
        $this->loginAsAdmin();
        $admin = User::hasAdminRole()->firstOrfail();

        $this->loginAsModer()
            ->putJson(route('panel.user.ban'), [
                'id' => $admin->id,
                'reason' => 'Some reason',
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
        $user = User::notBanned()->inRandomOrder()->firstOrFail();

        $this
            ->login()
            ->putJson(route('panel.user.ban'), [
                'id' => $user->id,
                'reason' => 'Some reason',
            ])
            ->assertRedirect();
    }

    public function test_user_cannot_unban_user(): void
    {
        $bannedUser = User::banned()->inRandomOrder()->firstOrFail();

        $this
            ->login()
            ->putJson(route('panel.user.ban'), [
                'id' => $bannedUser->id,
            ])
            ->assertRedirect();
    }
}
