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
        Schema::create('medias', function (Blueprint $table) {
            $table->uuid('id');

            $table->string('href')->nullable()->default(null);

            $table->foreignId('user_id')->constrained();

            $table->nullableMorphs('media_to');

            $table->string('format')->nullable()->default(null);

            $table->integer('width')->nullable()->default(null);
            $table->integer('height')->nullable()->default(null);

            $table->longText('base64_preview')->nullable();

            $table->double('duration')->nullable()->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medias');
    }
};
