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
        Schema::create('replies', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->constrained();
            $table->foreignId('comment_id')->nullable()->default(null)->constrained()->onDelete('cascade');

            $table->boolean('isReplyToReply')->nullable()->default(false);
            $table->foreignId('reply_id')->nullable()->default(null)->constrained()->onDelete('cascade');
            
            $table->longText('text');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('replies');
    }
};
