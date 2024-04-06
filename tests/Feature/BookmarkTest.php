<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BookmarkTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_user_can_bookmark_post(): void
    {
        $post = Post::inRandomOrder()->firstOrFail();

        $this->login()
            ->postJson(route('bookmark.toggle'), [
                'post_id' => $post->id,
            ])->assertOk();
    }

    public function test_user_can_unbookmark_post(): void
    {
        $bookmarkedPost = Post::withCount('bookmarks')
            ->where('bookmarks_count', '>', 0)
            ->firstOrFail();

        $this->loginAs($bookmarkedPost->user)
            ->postJson(route('bookmark.toggle'), [
                'post_id' => $bookmarkedPost->id,
            ])->assertOk();
    }
}