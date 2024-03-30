<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ProfileTest extends TestCase
{
    use RefreshDatabase;

    public function test_profile_page_is_displayed(): void
    {
        $this
            ->login()
            ->get('/profile')
            ->assertInertia(fn(AssertableInertia $inertia) => $inertia
                ->component('Profile/Index')
            );
    }

    public function test_user_can_upload_avatar(): void
    {
        $this->login()
            ->postJson(route('user.upload.avatar'), [
                'image' => UploadedFile::fake()->image('some-image.jpeg'),
            ])->assertOk();
    }

    public function test_user_can_upload_cover_image(): void
    {
        $this->login()
            ->postJson(route('user.upload.subsite.cover'), [
                'image' => UploadedFile::fake()->image('some-image.jpeg'),
            ])->assertOk();
    }
}
