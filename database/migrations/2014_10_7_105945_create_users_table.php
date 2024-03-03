<?php

use App\Models\User;
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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();

            $table->string('name');
            $table->string('email')->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();
            $table->string('avatar')->nullable();
            $table->string('background_image')->nullable();
            $table->text('description')->nullable();

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
        $service = new ImageService;
        $users = User::all();
        foreach ($users as $u) {
            $service->delete($u->avatar);
            $service->delete($u->background_image);
        }
        Schema::dropIfExists('users');
    }
};
