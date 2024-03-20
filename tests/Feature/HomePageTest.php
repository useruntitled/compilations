<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class HomePageTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     */
    public function test_home_page_is_displayed(): void
    {
        $response = $this->get(route('home'));

        $response->assertInertia(fn(Assert $inertia) => $inertia
            ->component('Home/Index')
        );
    }
}
