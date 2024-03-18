<?php

namespace App\Providers;

use App\Models\Comment;
use App\Models\Media;
use App\Models\Post;
use App\Models\Subsite;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    private function bootEloquentMorphs()
    {
        Relation::morphMap([
            'App\Models\User' => User::class,
            'user' => User::class,
            'App\Models\Subsite' => Subsite::class,
            'subsite' => Subsite::class,
            'App\Models\Post' => Post::class,
            'post' => Post::class,
            'App\Models\Comment' => Comment::class,
            'comment' => Comment::class,
            'App\Models\Media' => Media::class,
        ]);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();

        $this->bootEloquentMorphs();
    }
}
