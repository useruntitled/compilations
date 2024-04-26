<?php

namespace Tests\Feature;

use App\Models\Comment;
use App\Models\Media;
use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class MediaTest extends TestCase
{
    use RefreshDatabase;

    protected $seed = true;

    public function test_media_file_can_be_destroyed(): void
    {
        $models = [Comment::class, Post::class];

        foreach ($models as $model) {
            $model = $model::whereHas('mediaRelation')->firstOrFail();

            $media = $model->image;

            $this->assertTrue(Storage::disk('media')->exists($media->filename));

            $media->delete();

            $this->assertFalse(Storage::disk('media')->exists($media->filename));
            $this->assertNull(Media::find($media->id));
        }
    }
}
