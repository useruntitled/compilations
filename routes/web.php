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

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

Route::controller(PostController::class)->group(function () {
    Route::get('post-edit/{id}/{slug}', 'edit')->name('post.edit')->middleware('auth');
    Route::post('post-film-attach', 'postAttachFilm')->name('post.attach.film')->middleware(['auth', 'creator']);
    Route::patch('post-film-dettach', 'postDettachFilm')->name('post.dettach.film')->middleware(['auth', 'creator']);
    Route::get('post/{id}', 'redirect')->name('post.redirect');
    Route::get('post/{id}/{slug?}', 'index')->name('post');
    Route::delete('post', 'destroy')->name('post.delete')->middleware('auth');

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
//    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('admin')->group(function () {
    Route::get('panel', [AdminController::class, 'index'])->name('panel.index');
    Route::get('genres', [AdminController::class, 'genres'])->name('panel.genres');
    Route::get('films/{page?}', [AdminController::class, 'films'])->name('panel.films');
    Route::get('users', [AdminController::class, 'users'])->name('panel.users');
    Route::get('admins', [AdminController::class, 'admins'])->name('panel.admins');
    Route::get('posts', [AdminController::class, 'posts'])->name('panel.posts');
    Route::get('tags', [AdminController::class, 'tags'])->name('panel.tags');
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

// Route::controller(KarmaController::class)->group(function(){
//     Route::get('forbidden/karma','forbidden')->name('karma.forbidden')->middleware('auth');
// });

// Route::controller(NotificationController::class)->group(function(){
//     Route::get('notifications')->name('notifications')->middleware('auth');
// });

Route::controller(PersonalPageController::class)->group(function () {
    Route::get('profile/{id?}/', 'index')->name('profile');
});

Route::controller(PersonalPageController::class)->group(function () {
    Route::get('profile/{id}/comments', 'comments')->name('profile.comments');
});

// Route::get('test',[RegisteredUserController::class,'uploadAvatar']);


Route::controller(\App\Http\Controllers\SearchController::class)->group(function () {
   Route::get('search', 'index')->name('search');
});

Route::controller(\App\Http\Controllers\Auth\SocialiteProviderController::class)->group(function() {
   Route::get('oauth/redirect/{provider}','redirect')->name('oauth.redirect')->middleware('guest');
   Route::get('oauth/callback/{provider}','callback');
});



require __DIR__.'/auth.php';
require __DIR__.'/404.php';
