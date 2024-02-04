<?php

use App\Models\Comment;
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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();

            $table->foreignId('post_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('comment_id')->nullable()->constrained();

            $table->integer('level')->constrained();

            $table->longText('text');

            $table->boolean('active')->nullable()->default(false);
            $table->string('image')->nullable();
            $table->timestamps();
            $table->softDeletes($column = 'deleted_at', $precision = 0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $service = new ImageService();
        $comments = Comment::all();
        foreach ($comments as $c) {
            $service->delete($c->image);
        }
        Schema::dropIfExists('comments');
    }
};
