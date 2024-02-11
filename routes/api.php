<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PersonalPageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ReputationController;
use App\Http\Controllers\SidebarController;
use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ImageController::class)->group(function () {
    Route::get('image/{filename}/{dimensions}', 'crop')->name('image.crop');
    Route::get('im/{filename}/x/{scale}', 'index')->name('im');
});

Route::controller(FilmController::class)->group(function () {
    Route::get('film-search/{query}', 'search')->name('film.search');
});

Route::controller(CommentController::class)->group(function () {
    Route::get('comment/{id}')->name('comment.get');
    Route::get('comments/{post_id}', 'getByPostId')->name('comments.get');
    Route::post('comment', 'create')->name('comment.create')->middleware('auth');
    Route::delete('comment', 'delete')->name('comment.delete')->middleware('auth');
    Route::put('comment', 'update')->name('comment.update')->middleware('auth');
});

Route::controller(PostController::class)->group(function () {
    Route::post('post', 'store')->name('post.create')->middleware(['auth', 'creator']);
    Route::put('post', 'update')->name('post.update')->middleware(['auth']);
    Route::get('post/{id}', 'get')->name('post.get')->middleware(['auth']);
    Route::get('posts/popular/page/{page?}', 'getPopular')->name('posts.popular');
    Route::get('posts/new/page/{page?}', 'getNew')->name('posts.new');
    Route::get('posts/random/page/{page?}', 'getRandom')->name('posts.random');
    Route::post('post/image', 'uploadImage')->name('post.upload.image')->middleware(['auth']);
    Route::post('post/publish', 'publish')->name('post.publish')->middleware(['auth', 'creator']);
});

Route::controller(PersonalPageController::class)->group(function () {
    Route::get('profile/{id}/comments/page/{page}', 'getComments')->name('profile.comments.get');
    Route::get('profile/{id}/posts/page/{page}', 'getPosts')->name('profile.posts.get');
});

Route::controller(BookmarkController::class)->group(function () {
    Route::post('bookmark', 'toggle')->name('bookmark.toggle')->middleware('auth');
    Route::get('me/bookmarks/page/{page}', 'getMyBookmarkedPosts')->name('me.bookmarks.get')->middleware('auth');
});

// Route::controller(CommentReputationController::class)->group(function(){
//     Route::patch('reputation/comment','patch')->name('comment.reputation.post')->middleware('auth');
// });

// Route::controller(ReplyReputationController::class)->group(function(){
//     Route::patch('reputation/reply','patch')->name('reply.reputation.post')->middleware('auth');
// });

Route::controller(SidebarController::class)->group(function () {
    Route::get('sidebar/comments/last', 'getLastComments')->name('comments.get.last');
});

Route::controller(ReputationController::class)->group(function () {
    Route::post('reputation', 'index')->name('new.reputation')->middleware('auth');
});

// Route::get('/notifications/get', function () {
//     return NotificationResource::collection(Auth::user()->notifications);
// })->name('notifications.get')->middleware('auth');

Route::controller(NotificationController::class)->group(function () {
    Route::get('me/notifications/page/{page?}', 'getMyNotifications')->name('me.notifications.get')->middleware('auth');
    Route::patch('me/notifications/read', 'read')->name('me.notifications.read')->middleware('auth');
});

// Route::post('notifications/read', function () {
//     return Auth::user()->markAsReadNotifications();
// })->name('notifications.read')->middleware('auth');

Route::middleware('auth')->group(function () {
    Route::post('user/avatar', [RegisteredUserController::class, 'uploadAvatar'])->name('user.upload.avatar');
    Route::post('user/background-image', [RegisteredUserController::class, 'uploadBackgroundImage'])->name('user.upload.background.image');
});

Route::controller(\App\Http\Controllers\SearchController::class)->group(function () {
   Route::get('search/{query}','search')->name('search.query');
});
