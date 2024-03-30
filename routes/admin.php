<?php

Route::middleware('moderOrAdmin')->group(function() {
    Route::controller(\App\Http\Controllers\Admin\AdminController::class)->group(function () {
       Route::get('panel', 'index')->name('panel.index');
    });


    Route::controller(\App\Http\Controllers\Admin\FilmsController::class)->group(function () {
        Route::get('panel/films', 'index')->name('panel.films');
        Route::get('panel/view/films/{id}', 'view')->name('panel.view.film');
        Route::patch('panel/update/film/{id}', 'update')->name('panel.update.film');
    });

    Route::controller(\App\Http\Controllers\Admin\PostsController::class)->group(function () {
        Route::get('panel/posts', 'index')->name('panel.posts');
        Route::get('panel/view/post/{id}', 'view')->name('panel.view.post');
        Route::put('panel/decline/post', 'decline')->name('panel.decline.post');
    });

    Route::controller(\App\Http\Controllers\Admin\UsersController::class)->group(function () {
        Route::get('panel/users', 'index')->name('panel.users');
        Route::get('panel/view/user/{id}', 'view')->name('panel.view.user');
        Route::put('panel/toggle/ban', 'toggleBan')->name('panel.toggle.ban');
    });

    Route::controller(\App\Http\Controllers\Admin\ReportController::class)->group(function () {
        Route::get('panel/report/view/{report_id}', 'index')->name('panel.report.view');
    });

    Route::controller(\App\Http\Controllers\Admin\CommentsController::class)->group(function () {
        Route::get('panel/comments', 'index')->name('panel.comments');
        Route::get('panel/view/comment/{id}', 'view')->name('panel.view.comment');
        Route::put('panel/decline/comment', 'decline')->name('panel.decline.comment');
   });
});

Route::middleware('admin')->group(function() {
    Route::controller(\App\Http\Controllers\Admin\AdminController::class)->group(function () {
      Route::get('panel/admins', 'admins')->name('panel.admins');
      Route::get('panel/moders', 'moders')->name('panel.moders');
   });

    Route::controller(\App\Http\Controllers\Admin\UsersController::class)->group(function () {
        Route::put('panel/toggle/moder', 'toggleModer')->name('panel.user.toggle.moder');
    });
});
