<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\CommentReputationController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ReplyController;
use App\Http\Controllers\ReplyReputationController;
use Illuminate\Http\Request;
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

Route::controller(ImageController::class)->group(function(){
    Route::get('image/{filename}/{dimensions}','crop')->name('image.crop');
});

Route::controller(CommentController::class)->group(function(){
    Route::post('comment','create')->name('comment.create')->middleware('auth');
    Route::delete('comment','delete')->name('comment.delete')->middleware('auth');
    Route::put('comment','update')->name('comment.update')->middleware('auth');
});

Route::controller(CommentReputationController::class)->group(function(){
    Route::patch('reputation/comment','patch')->name('comment.reputation.post')->middleware('auth');
});

Route::controller(ReplyController::class)->group(function(){
    Route::put('reply','put')->name('reply.update')->middleware('auth');
    Route::post('reply','create')->name('reply.create')->middleware('auth');
    Route::delete('reply','delete')->name('reply.delete')->middleware('auth');
    Route::get('reply/{comment_id}','get')->name('replies.get');
});

Route::controller(ReplyReputationController::class)->group(function(){
    Route::patch('reputation/reply','patch')->name('reply.reputation.post')->middleware('auth');
});