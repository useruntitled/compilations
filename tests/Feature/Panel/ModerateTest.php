<?php

namespace Tests\Feature\Panel;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ModerateTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_moder_can_decline_post(): void
    {
        $post = Post::firstOrFail();

        $this->loginAsModer()
            ->putJson(route('panel.decline.post'), [
                'id' => $post->id,
                'reason' => 'Some reason',
            ])->assertOk();

        $this->assertNotNull($post->refresh()->declined_at);
    }

    public function test_moder_can_decline_comment(): void
    {
        $comment = Comment::published()->firstOrFail();

        $this->loginAsModer()
            ->putJson(route('panel.decline.comment'), [
                'id' => $comment->id,
                'reason' => 'Some reason',
            ])->assertOk();
        $this->assertNotNull($comment->refresh()->declined_at);
    }

    public function test_user_cannot_decline_post(): void
    {
        $post = Comment::published()->firstOrFail();

        $this->login()
            ->putJson(route('panel.decline.post'), [
                'id' => $post->id,
                'reason' => 'Some reason',
            ])->assertRedirect();
    }

    public function test_user_cannot_decline_comment(): void
    {
        $comment = Comment::published()->firstOrFail();

        $this->login()
            ->putJson(route('panel.decline.comment'), [
                'id' => $comment->id,
                'reason' => 'Some reason',
            ])->assertRedirect();
    }
}
