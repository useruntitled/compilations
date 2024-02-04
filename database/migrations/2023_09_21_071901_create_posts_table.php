<?php

use App\Models\Post;
use App\Services\ImageService;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->nullable();

            $table->foreignId('user_id')->constrained();

            $table->string('title')->nullable();
            $table->longText('description')->nullable();

            $table->boolean('active')->nullable()->default(false);

            $table->string('image')->nullable();

            $table->timestamps();
            $table->timestamp('published_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $service = new ImageService();
        $posts = Post::all();
        foreach ($posts as $p) {
            $service->delete($p->image);
        }
        Schema::dropIfExists('posts');
    }
};
