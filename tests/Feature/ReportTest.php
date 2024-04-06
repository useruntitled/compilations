<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\Film;
use App\Models\Post;
use App\Models\Report;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ReportTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    protected array $messages = [
        Report::SPAM,
        Report::RUDE,
        Report::VIOLENCE,
        Report::ILLEGAL,
        Report::OTHER,
        Report::LIE,
    ];

    public function test_users_and_guests_can_report_post(): void
    {
        foreach ($this->messages as $message) {
            $this->postJson(route('report.store'), [
                'report_to_id' => Post::inRandomOrder()->first()->id,
                'report_to_type' => 'Post',
                'message' => $message,
            ])->assertStatus(200);
        }
    }

    public function test_users_and_guests_can_report_film(): void
    {
        foreach ($this->messages as $message) {
            $this->postJson(route('report.store'), [
                'report_to_id' => Film::inRandomOrder()->first()->id,
                'report_to_type' => 'Film',
                'message' => $message,
            ])->assertStatus(200);
        }
    }

    public function test_users_and_guests_can_report_comment(): void
    {
        foreach ($this->messages as $message) {
            $this->postJson(route('report.store'), [
                'report_to_id' => Comment::inRandomOrder()->first()->id,
                'report_to_type' => 'Comment',
                'message' => $message,
            ])->assertStatus(200);
        }
    }
}
