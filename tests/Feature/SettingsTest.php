<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class SettingsTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_settings_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $response = $this
            ->actingAs($user)
            ->get(route('settings'));

        $response->assertInertia(fn(AssertableInertia $inertia) => $inertia
            ->component('Auth/Settings/Index')
        );
    }

    public function test_settings_profile_section_page_is_displayed(): void
    {
        $user = User::factory()->create();

        $response = $this
            ->actingAs($user)
            ->get(route('settings.profile'));

        $response->assertInertia(fn(AssertableInertia $inertia) => $inertia
            ->component('Auth/Settings/Profile')
        );
    }

    public function test_guest_cannot_view_main_settings_page(): void
    {
        $response = $this->get(route('settings'));
        $response->assertRedirect();
    }

    public function test_guest_cannot_view_profile_settings_page(): void
    {
        $response = $this->get(route('settings.profile'));
        $response->assertRedirect();
    }

    public function test_user_can_change_profile_info(): void
    {
        $user = User::factory()->create([
            'name' => 'John Doe',
        ]);

        $user->subsite()->update([
            'description' => 'John Doe Description',
        ]);

        $this->actingAs($user)
            ->putJson(route('settings.profile.update'), [
                'name' => 'Not A John Doe',
                'description' => 'Not A John Doe Description',
            ]);

        $updatedUser = $user->fresh();

        $this->assertSame($user->name, $updatedUser->name);
        $this->assertSame($user->subsite->description, $updatedUser->subsite->description);
    }
}
