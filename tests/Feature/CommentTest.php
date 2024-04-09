<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class CommentTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_guest_cannot_store_comment(): void
    {
        $post = Post::first();
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
        $this->assertEquals($comment, $comment->refresh());
    }

    public function test_guest_cannot_delete_comment(): void
    {
        $comment = Comment::published()->first();
        $this->postJson(route('comment.delete'), [
            'id' => $comment->id,
        ])->assertRedirect();
        $this->assertEquals($comment, $comment->refresh());
    }

    public function test_user_can_store_comment(): void
    {
        $this
            ->login()
            ->postJson(route('comment.store'), [
                'post_id' => Post::first()->id,
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

    public function test_user_can_attach_media_to_comment(): void
    {
        $comment = Comment::whereNull('media')->firstOrFail();

        $response = $this->loginAs($comment->user);

        $media = $response
            ->postJson(route('media.upload.without-save'), [
                'image' => UploadedFile::fake()->image('some-image.jpeg'),
            ])->assertOk();

        $response->putJson(route('comment.update'), [
            'id' => $comment->id,
            'text' => $comment->text,
            'image' => $media,
        ])->assertOk();

        $this->assertNotNull($comment->refresh()->image);
    }

    public function test_user_can_delete_comment(): void
    {
        $comment = Comment::firstOrFail();
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
        $this->assertEquals($comment, $comment->refresh());
    }

    public function test_user_cannot_delete_other_comment(): void
    {
        $comment = Comment::published()->first();
        $this
            ->login()
            ->deleteJson(route('comment.delete'), [
                'id' => $comment->id,
            ])->assertRedirect();
        $this->assertEquals($comment, $comment->refresh());
    }
}
