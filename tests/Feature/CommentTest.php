<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CommentTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_guest_cannot_store_comment(): void
    {
        $post = Post::published()->first();
        $this->postJson(route('comment.store'), [
            'post_id' => $post->id,
            'text' => 'Some text',
        ])->assertRedirect();
    }

    public function test_guest_cannot_update_comment(): void
    {
        $comment = Comment::published()->first();
        $this->putJson(route('comment.update'), [
            'id' => $comment->id,
            'text' => 'Some text',
        ])->assertRedirect();
    }

    public function test_guest_cannot_delete_comment(): void
    {
        $comment = Comment::published()->first();
        $this->postJson(route('comment.delete'), [
            'id' => $comment->id
        ])->assertRedirect();
    }

    public function test_user_can_store_comment(): void
    {
        $this
            ->login()
            ->postJson(route('comment.store'), [
                'post_id' => Post::published()->first()->id,
                'text' => 'Some text',
            ])->assertJson([
                'text' => 'Some text',
            ]);
    }

    public function test_user_can_update_comment(): void
    {
        $comment = Comment::published()->first();
        $this
            ->loginAs($comment->user)
            ->putJson(route('comment.update'), [
                'id' => $comment->id,
                'text' => 'Some new text',
            ]);
        $comment->refresh();
        $this->assertSame($comment->text, 'Some new text');
    }

    public function test_user_can_delete_comment(): void
    {
        $comment = Comment::published()->first();
        $this
            ->loginAs($comment->user)
            ->deleteJson(route('comment.delete'), [
                'id' => $comment->id,
            ])->assertStatus(200);

        $comment->refresh();
        $this->assertTrue($comment->trashed());
    }

    public function test_user_cannot_update_other_comment(): void
    {
        $comment = Comment::published()->first();
        $this
            ->login()
            ->putJson(route('comment.update'), [
                'id' => $comment->id,
                'text' => 'Some text',
            ])->assertRedirect();
    }

    public function test_user_cannot_delete_other_comment(): void
    {
        $comment = Comment::published()->first();
        $this
            ->login()
            ->deleteJson(route('comment.delete'), [
                'id' => $comment->id,
            ])->assertRedirect();
    }
}
