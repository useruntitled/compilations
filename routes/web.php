<?php

use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PersonalPageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SettingsController;
use App\Models\Post;
use Illuminate\Support\Facades\Route;

Route::get('banned', function () {
    return inertia('Banned');
})->name('banned');

Route::controller(PostController::class)->group(function () {
    Route::get('posts/{id}', 'redirect')->name('post.redirect');
    Route::get('posts/{id}/{slug?}', 'index')->name('post');

    Route::get('new', 'new')->name('new');
});

Route::controller(MediaController::class)->group(function () {
    Route::get('media/{filename}', 'index')->name('media.view');
});

Route::get('posts/redirect/{id}', function () {
    $post = Post::find(request()->id);

    return redirect()->route('post', ['id' => $post->id, 'slug' => $post->slug]);
});

Route::controller(FilmController::class)->group(function () {
    Route::post('films', 'add')->name('film.store')->middleware('auth');
    Route::patch('films', 'patch')->name('film.patch')->middleware('admin');
});

Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'index')->name('home');
});

Route::middleware('auth')->group(function () {
    Route::get('drafts', [PostController::class, 'drafts'])->name('drafts');
});

Route::controller(CommentController::class)->group(function () {
    Route::get('comments/{id}', 'index')->name('comment.redirect');
});

Route::controller(PersonalPageController::class)->group(function () {
    Route::get('profile/{id?}/', 'index')->name('profile');
});

Route::controller(PersonalPageController::class)->group(function () {
    Route::get('profile/{id}/comments', 'comments')->name('profile.comments');
});

Route::middleware('auth')->group(function () {
    Route::get('settings', [SettingsController::class, 'index'])->name('settings');
    Route::get('settings/profile', [SettingsController::class, 'profile'])->name('settings.profile');
    Route::get('notifications', [NotificationController::class, 'index'])->name('notifications');
    Route::get('me/bookmarks', [BookmarkController::class, 'index'])->name('me.bookmarks');
});

Route::controller(SearchController::class)->group(function () {
    Route::get('search', 'index')->name('search');
});

require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/404.php';
