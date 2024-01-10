<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\KarmaController;
use App\Http\Controllers\PersonalPageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostReputationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::controller(PostController::class)->group(function(){
    Route::get('create','create')->name('post.create')->middleware(['auth','creator']);
    Route::get('post-finish/{id}','finish')->name('post.finish')->middleware(['auth','creator']);
    Route::post('create','store')->name('post.create')->middleware(['auth','creator']);
    Route::put('create','update')->name('post.update')->middleware('auth');
    Route::put('publish','publish')->name('post.publish')->middleware(['auth','creator']);
    Route::get('post-edit/{id}/{slug}','edit')->name('post.edit')->middleware('auth');
    Route::post('post-film-attach','postAttachFilm')->name('post.attach.film')->middleware(['auth','creator']);
    Route::patch('post-film-dettach','postDettachFilm')->name('post.dettach.film')->middleware(['auth','creator']);
    Route::get('post/{id}/{slug?}','index')->name('post');
    Route::delete('post','destroy')->name('post.delete')->middleware('auth');
});

Route::controller(FilmController::class)->group(function(){
    Route::post('film','add')->name('film.store')->middleware('auth');
    Route::patch('film','patch')->name('film.patch')->middleware('admin');
    Route::get('film-search/{query}','search')->name('film.search');
    Route::get('film-edit/{id}','edit')->name('film.edit')->middleware(['auth','admin']);

    Route::patch('film-refresh','refresh')->name('film.refresh')->middleware('admin');
});

Route::controller(HomeController::class)->group(function(){
    Route::get('/','index')->name('home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('drafts',[ProfileController::class,'drafts'])->name('drafts');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('admin')->group(function() {
    Route::get('panel',[AdminController::class,'index'])->name('panel.index');
    Route::get('genres',[AdminController::class,'genres'])->name('panel.genres');
    Route::get('films/{page?}',[AdminController::class,'films'])->name('panel.films');
    Route::get('users',[AdminController::class,'users'])->name('panel.users');
    Route::get('admins',[AdminController::class,'admins'])->name('panel.admins');
    Route::get('posts',[AdminController::class,'posts'])->name('panel.posts');
    Route::get('tags',[AdminController::class,'tags'])->name('panel.tags');
});

Route::controller(TagController::class)->group(function(){
    Route::post('tag-post','attach')->name('tag.attach.post')->middleware('auth');
    Route::delete('tag-post','detach')->name('tag.detach.post');
    Route::get('tag/{slug}','index')->name('tag');
});

Route::controller(UserController::class)->group(function() {
    Route::get('user/{username}','index')->name('user');
});


Route::controller(PostReputationController::class)->group(function(){
    Route::patch('reputation/post','patch')->name('reputation.post')->middleware('auth');
});

Route::controller(GenreController::class)->group(function(){
    Route::get('genre/{slug}','index')->name('genre')->middleware('admin');
    Route::post('wire','wire')->name('genre.wire')->middleware('admin');
});

Route::controller(KarmaController::class)->group(function(){
    Route::get('forbidden/karma','forbidden')->name('karma.forbidden')->middleware('auth');
});

Route::controller(PersonalPageController::class)->group(function(){
    Route::get('profile/{id}/{section?}','index')->name('profile');
});

require __DIR__.'/auth.php';
