<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class PostTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    /**
     * A basic feature test example.
     */
    public function test_post_page_can_be_displayed(): void
    {
        $post = Post::first();

        $response = $this
            ->get(route('post', [
                'id' => $post->id,
                'slug' => $post->slug,
            ]));

        $response->assertInertia(fn (AssertableInertia $inertia) => $inertia
            ->component('post')
        );
    }

    public function test_post_redirect_page_can_be_displayed(): void
    {
        $this->get(route('post.redirect', [1]))->assertRedirect();
    }

    public function test_user_can_publish_post(): void
    {
        $title = 'This is my compilation!';
        $description = 'All about films in this compilation';

        $response = $this->login();
        $post = $response->postJson(route('post.store'), [
            'title' => $title,
            'description' => $description,
        ])->json();

        $response->getJson(route('film.search', ['322']));

        $response->putJson(route('post.update'), [
            'id' => $post['id'],
            'title' => $title,
            'description' => $description,
            'films' => [
                ['id' => 322],
            ],
        ]);

        $response->post(route('post.publish'), [
            'id' => $post['id'],
        ]);

        $post = Post::withCount('filmsRelation')->findOrFail($post['id']);
        $this->assertSame($post->title, $title);
        $this->assertSame($post->description, $description);
        $this->assertSame($post->films_relation_count, 1);
    }

    public function test_user_can_attach_image_to_post(): void
    {
        $post = Post::first();
        $response = $this->loginAs($post->user);

        $response->postJson(route('post.upload.image'), [
            'id' => $post->id,
            'image' => UploadedFile::fake()->image('some-image.jpeg'),
        ]);

        $post->refresh();

        $this->assertNotNull($post->image);
    }

    public function test_user_can_delete_post(): void
    {
        $post = Post::first();
        $this->actingAs($post->user)->delete(route('post.delete'), ['id' => $post->id])->assertStatus(200);
        $post = Post::find($post->id);
        $this->assertSame($post, null);
    }

    public function test_user_can_publish_draft(): void
    {
        $response = $this->login();

        $draft = $response->postJson(route('post.store'), [
            'title' => 'Draft',
        ])->json();

        $draft = Post::drafted()->find($draft['id']);

        $this->assertNull($draft->published_at);

        $response->getJson(route('film.search', ['322']));

        $response->putJson(route('post.update'), [
            'id' => $draft->id,
            'title' => $draft->title,
            'description' => $draft->description,
            'films' => [
                ['id' => 322],
            ],
        ]);

        $response->postJson(route('post.publish'), [
            'id' => $draft->id,
        ]);

        $draft->refresh();

        $this->assertNotNull($draft->published_at);
    }

    public function test_drafts_page_can_be_displayed(): void
    {
        $response = $this
            ->login()
            ->get(route('drafts'));

        $response->assertInertia(fn (AssertableInertia $inertia) => $inertia
            ->component('Auth/Drafts')
        );
    }

    public function test_guest_cannot_store_post(): void
    {
        $this->post(route('post.store'), [
            'title' => 'Some title',
        ])->assertRedirect();
    }

    public function test_guest_cannot_update_post(): void
    {
        $post = Post::first();
        $this->putJson(route('post.update'), [
            'id' => $post->id,
            'title' => 'Some title',
        ])->assertRedirect();
    }

    public function test_guest_cannot_delete_post(): void
    {
        $post = Post::first();
        $this->postJson(route('post.delete'), [
            'id' => $post->id,
        ])->assertRedirect();
    }

    public function test_guest_cannot_publish_draft(): void
    {
        $draft = Post::drafted()->first();
        $this->postJson(route('post.publish'), [
            'id' => $draft->id,
        ])->assertRedirect();
    }

    public function test_user_cannot_update_other_user_post(): void
    {
        $post = Post::first();
        $this->login()
            ->putJson(route('post.update'), [
                'id' => $post->id,
                'title' => 'Some title',
            ])->assertRedirect();
    }

    public function test_user_cannot_delete_other_user_post(): void
    {
        $post = Post::first();
        $this->login()
            ->deleteJson(route('post.delete'), [
                'id' => $post->id,
            ])->assertRedirect();
    }

    public function test_user_cannot_publish_other_user_draft(): void
    {
        $post = Post::drafted()->first();
        $this->login()
            ->postJson(route('post.publish'), [
                'id' => $post->id,
            ])->assertRedirect();
    }
}
