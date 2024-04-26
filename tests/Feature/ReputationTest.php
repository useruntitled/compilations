<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\Post;
use App\Models\Reputation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ReputationTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    protected $models = [
        Post::class,
        Comment::class,
    ];

    public function test_user_can_store_up_vote(): void
    {
        foreach ($this->models as $model) {
            $eloquent = $model::inRandomOrder()->first();

            $this->login()
                ->postJson(route('reputation.store'), [
                    'type' => $model == Comment::class ? 'comment' : 'post',
                    'id' => $eloquent->id,
                    'action' => 'up',
                ])->assertCreated();
        }
    }

    public function test_user_can_store_down_vote(): void
    {
        foreach ($this->models as $model) {
            $eloquent = $model::inRandomOrder()->first();

            $this->login()
                ->postJson(route('reputation.store'), [
                    'type' => $model == Comment::class ? 'comment' : 'post',
                    'id' => $eloquent->id,
                    'action' => 'down',
                ])->assertCreated();
        }
    }

    public function test_user_can_update_vote(): void
    {
        foreach ($this->models as $model) {
            $eloquent = $model::whereHas('reputationRelation')->firstOrFail();
            $reputation = $eloquent->reputationRelation->first();

            $this->loginAs($reputation->userRelation)
                ->putJson(route('reputation.update'), [
                    'id' => $reputation->id,
                    'action' => $reputation->action == 'down' ? 'up' : 'down',
                ])->assertOk();
        }
    }

    public function test_user_can_delete_vote(): void
    {
        foreach ($this->models as $model) {
            $eloquent = $model::whereHas('reputationRelation')->first();
            $reputation = $eloquent->reputationRelation->first();

            $this->loginAs($reputation->userRelation)
                ->deleteJson(route('reputation.destroy'), [
                    'id' => $reputation->id,
                ])->assertNoContent();
        }
    }

    public function test_user_cannot_delete_other_user_vote(): void
    {
        $reputation = Reputation::inRandomOrder()->first();

        $this->login()
            ->deleteJson(route('reputation.destroy'), [
                'id' => $reputation->id,
            ])->assertRedirect();

        $this->assertNotNull($reputation->refresh());
    }

    public function test_user_cannot_update_other_user_vote(): void
    {
        $reputation = Reputation::inRandomOrder()->first();

        $this->login()
            ->putJson(route('reputation.update'), [
                'id' => $reputation->id,
                'action' => 'up',
            ])->assertRedirect();

        $this->assertSame($reputation, $reputation->refresh());
    }

    public function test_user_cannot_store_vote_twice(): void
    {
        $reputation = Reputation::inRandomOrder()->first();

        $this->loginAs($reputation->userRelation)
            ->postJson(route('reputation.store'), [
                'type' => get_class($reputation) == 'App\\Models\\Post' ? 'post' : 'comment',
                'id' => $reputation->reputation_to->id,
                'action' => array_rand(array_flip(['up', 'down'])),
            ])->assertRedirect();
    }

    public function test_guest_cannot_vote(): void
    {
        foreach ($this->models as $model) {
            $this
                ->postJson(route('reputation.store'), [
                    'type' => $model,
                    'id' => 1,
                    'action' => array_rand(array_flip(['up', 'down'])),
                ])->assertRedirect();
        }
    }
}
