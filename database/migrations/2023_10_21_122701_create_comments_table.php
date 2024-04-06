<?php

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

            $table->foreignId('post_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('comment_id')->nullable()->constrained()->onDelete('cascade');

            $table->integer('level');

            $table->longText('text');

            $table->timestamps();
            $table->softDeletes($column = 'deleted_at', $precision = 0);

            $table->timestamp('declined_at')->nullable();
            $table->unsignedBigInteger('declined_by')->unsigned()->nullable();
            $table->foreign('declined_by')->references('id')->on('users')->onDelete('CASCADE');
            $table->text('declined_reason')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
