<?php

namespace Tests\Feature;

use App\Models\Film;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FilmTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    /**
     * A basic feature test example.
     */
    public function test_user_can_add_film_to_database_by_search_action(): void
    {
        $this->assertNull(Film::find(322));
        $this
            ->actingAs(User::factory()->create())
            ->getJson(route('film.search', ['322']));
        $this->assertNotNull(Film::find(322));
    }
}
