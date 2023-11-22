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
        Schema::create('films', function (Blueprint $table) {
           $table->id()->require(); // kp_id, no auto-filling

            $table->string('type')->nullable();
            $table->boolean('serial')->nullable();

            $table->string('name_en')->nullable();
            $table->string('name_ru')->nullable();

            $table->string('poster_url')->nullable();
            $table->string('poster_url_preview')->nullable();
            $table->string('logo_url')->nullable();



            $table->string('slogan')->nullable();
            $table->longText('description')->nullable();
            $table->string('short_description')->nullable();

            $table->integer('year')->nullable();
            $table->integer('start_year')->nullable();
            $table->integer('end_year')->nullable();
            $table->string('country')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('films');
    }
};
