<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PersonalPageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReputationController;
use App\Http\Controllers\SidebarController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(MediaController::class)->group(function () {
    Route::get('image/{filename}/{dimensions}', 'crop')->name('image.crop');
    Route::get('im/{filename?}/x/{scale?}', 'index')->name('im');
    Route::post('media/upload/without-save', 'uploadWithoutSave')->name('media.upload.without-save');
});

Route::controller(FilmController::class)->group(function () {
    Route::get('film-search/{query}', 'search')->name('film.search');
});

Route::controller(CommentController::class)->group(function () {
    Route::get('comment/{id}')->name('comment.get');
    Route::get('comments/{post_id}', 'getByPostId')->name('comments.get');
    Route::post('comments', 'store')->name('comment.store')->middleware('auth');
    Route::delete('comments', 'delete')->name('comment.delete')->middleware('auth');
    Route::put('comments', 'update')->name('comment.update')->middleware('auth');
});

Route::controller(PostController::class)->group(function () {
    Route::post('posts', 'store')->name('post.store')->middleware(['auth', 'creator']);
    Route::delete('posts', 'delete')->name('post.delete')->middleware(['auth', 'creator']);
    Route::put('posts', 'update')->name('post.update')->middleware(['auth']);
    Route::get('posts/{id}', 'get')->name('post.get')->middleware(['auth']);
    Route::get('posts/popular/page/{page?}', 'getPopular')->name('posts.popular');
    Route::get('posts/new/page/{page?}', 'getNew')->name('posts.new');
    Route::get('posts/random/page/{page?}/except/{post_id}', 'getRandom')->name('posts.random');
    Route::get('posts/most-commented/page/{page?}', 'getMostCommented')->name('posts.most-commented');
    Route::post('posts/image', 'uploadImage')->name('post.upload.image')->middleware(['auth']);
    Route::post('posts/publish', 'publish')->name('post.publish')->middleware(['auth', 'creator']);
});

Route::controller(PersonalPageController::class)->group(function () {
    Route::get('profile/{id}/comments/page/{page}', 'getComments')->name('profile.comments.get');
    Route::get('profile/{id}/posts/page/{page}', 'getPosts')->name('profile.posts.get');
});

Route::middleware('auth')->group(function () {
    Route::put('me/profile', [RegisteredUserController::class, 'updateProfileInfo'])->name('settings.profile.update');
});

Route::controller(BookmarkController::class)->group(function () {
    Route::post('bookmark', 'store')->name('bookmark.store')->middleware('auth');
    Route::delete('bookmark', 'destroy')->name('bookmark.destroy')->middleware('auth');
    Route::get('me/bookmarks/page/{page}', 'get')->name('me.bookmarks.get')->middleware('auth');
});

Route::controller(SidebarController::class)->group(function () {
    Route::get('sidebar/comments/last', 'getLastComments')->name('comments.get.last');
});

Route::controller(ReputationController::class)->group(function () {
    Route::post('reputation', 'store')->name('reputation.store')->middleware('auth');
    Route::put('reputation', 'update')->name('reputation.update')->middleware('auth');
    Route::delete('reputation', 'destroy')->name('reputation.destroy')->middleware('auth');
});

Route::controller(NotificationController::class)->group(function () {
    Route::get('me/notifications/page/{page?}', 'getMyNotifications')->name('me.notifications.get')->middleware('auth');
    Route::patch('me/notifications/read', 'read')->name('me.notifications.read')->middleware('auth');
});

Route::middleware('auth')->group(function () {
    Route::post('user/avatar', [RegisteredUserController::class, 'uploadAvatar'])->name('user.upload.avatar');
    Route::post('user/cover', [RegisteredUserController::class, 'uploadCover'])->name('user.upload.subsite.cover');
});

Route::controller(\App\Http\Controllers\SearchController::class)->group(function () {
    Route::get('search/{query}', 'search')->name('search.query');
});

Route::controller(\App\Http\Controllers\ReportController::class)->group(function () {
    Route::post('report/store', 'store')->name('report.store');
});
