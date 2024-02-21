<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\KarmaController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PersonalPageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TagController;
use App\Models\Post;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

Route::get('banned', function () {
    return inertia('Banned');
})->name('banned');

Route::controller(PostController::class)->group(function () {
//    Route::get('post-edit/{id}/{slug}', 'edit')->name('post.edit')->middleware('auth');
//    Route::post('post-film-attach', 'postAttachFilm')->name('post.attach.film')->middleware(['auth', 'creator']);
//    Route::patch('post-film-dettach', 'postDettachFilm')->name('post.dettach.film')->middleware(['auth', 'creator']);
    Route::get('post/{id}', 'redirect')->name('post.redirect');
    Route::get('post/{id}/{slug?}', 'index')->name('post');

    Route::get('new', 'new')->name('new');
});

Route::get('post/redirect/{id}', function () {
    $post = Post::find(request()->id);

    return redirect()->route('post', ['id' => $post->id, 'slug' => $post->slug]);
});

Route::controller(FilmController::class)->group(function () {
    Route::post('film', 'add')->name('film.store')->middleware('auth');
    Route::patch('film', 'patch')->name('film.patch')->middleware('admin');

    Route::get('film-edit/{id}', 'edit')->name('film.edit')->middleware(['auth', 'admin']);

    Route::patch('film-refresh', 'refresh')->name('film.refresh')->middleware('admin');
});

Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'index')->name('home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('drafts', [PostController::class, 'drafts'])->name('drafts');
});

Route::controller(TagController::class)->group(function () {
    Route::post('tag-post', 'attach')->name('tag.attach.post')->middleware('auth');
    Route::delete('tag-post', 'detach')->name('tag.detach.post');
    Route::get('tag/{slug}', 'index')->name('tag');
});

Route::controller(CommentController::class)->group(function () {
    Route::get('comment/{id}', 'index')->name('comment.redirect');
});

Route::controller(GenreController::class)->group(function () {
    Route::get('genre/{slug}', 'index')->name('genre')->middleware('admin');
    Route::post('wire', 'wire')->name('genre.wire')->middleware('admin');
});

Route::controller(PersonalPageController::class)->group(function () {
    Route::get('profile/{id?}/', 'index')->name('profile');
});

Route::controller(PersonalPageController::class)->group(function () {
    Route::get('profile/{id}/comments', 'comments')->name('profile.comments');
});

Route::middleware('auth')->group(function () {
    Route::get('settings', [\App\Http\Controllers\SettingsController::class, 'index'])->name('settings');
    Route::get('settings/profile', [\App\Http\Controllers\SettingsController::class, 'profile'])->name('settings.profile');
    Route::get('notifications', [NotificationController::class, 'index'])->name('notifications');
    Route::get('me/bookmarks', [\App\Http\Controllers\BookmarkController::class, 'index'])->name('me.bookmarks');
});

Route::controller(\App\Http\Controllers\SearchController::class)->group(function () {
   Route::get('search', 'index')->name('search');
});




require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/404.php';
