<?php

use App\Models\User;
use App\Services\Media\MediaService;
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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();

            $table->string('name');
            $table->string('email')->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();

//            $table->foreignId('media_id')->nullable()->default(null)->constrained('media');

            $table->string('provider')->nullable();
            $table->string('provider_user_id')->nullable();

            $table->timestamps();
            $table->timestamp('banned_at')->nullable();
            $table->unsignedBigInteger('banned_by')->unsigned()->nullable();
            $table->foreign('banned_by')->references('id')->on('users')->onDelete('CASCADE');
            $table->string('banned_reason')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $files = Storage::disk('media')->allFiles();
        Storage::disk('media')->delete($files);
        Schema::dropIfExists('users');
    }
};
