<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ReputationTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_user_can_up_vote_post(): void
    {
        $post = Post::inRandomOrder()->first();

        $this->login()
            ->postJson(route('new.reputation'), [
                'reputation_to_type' => 'Post',
                'reputation_to_id' => $post->id,
                'action' => 'up',
            ])->assertOk();
    }

    public function test_user_can_down_vote_post(): void
    {
        $post = Post::inRandomOrder()->first();

        $this->login()
            ->postJson(route('new.reputation'), [
                'reputation_to_type' => 'Post',
                'reputation_to_id' => $post->id,
                'action' => 'down',
            ])->assertOk();
    }

    public function test_user_can_up_vote_comment(): void
    {
        $comment = Comment::published()->first();

        $this->login()
            ->postJson(route('new.reputation'), [
                'reputation_to_type' => 'Comment',
                'reputation_to_id' => $comment->id,
                'action' => 'up',
            ])->assertOk();
    }

    public function test_user_can_down_vote_comment(): void
    {
        $comment = Comment::published()->first();

        $this->login()
            ->postJson(route('new.reputation'), [
                'reputation_to_type' => 'Comment',
                'reputation_to_id' => $comment->id,
                'action' => 'down',
            ])->assertOk();
    }

    public function test_guest_cannot_vote(): void
    {
        $types = ['Post', 'Comment'];
        foreach ($types as $t) {
            $this
                ->postJson(route('new.reputation'), [
                    'reputation_to_type' => $t,
                    'reputation_to_id' => 1,
                    'action' => array_rand(array_flip(['up', 'down'])),
                ])->assertRedirect();
        }
    }
}
