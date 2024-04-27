<?php

Route::name('panel.')->prefix('panel')->group(function () {
    Route::middleware('moderOrAdmin')->group(function () {
        Route::controller(\App\Http\Controllers\Admin\AdminController::class)->group(function () {
            Route::get('/', 'index')->name('index');
        });

        Route::controller(\App\Http\Controllers\Admin\FilmsController::class)->group(function () {
            Route::get('films', 'index')->name('films');
            Route::get('view/films/{id}', 'view')->name('view.film');
            Route::put('update/film/{id}', 'update')->name('update.film');
        });

        Route::controller(\App\Http\Controllers\Admin\PostsController::class)->group(function () {
            Route::get('posts', 'index')->name('posts');
            Route::get('view/post/{id}', 'view')->name('view.post');
            Route::put('decline/post', 'decline')->name('decline.post');
        });

        Route::controller(\App\Http\Controllers\Admin\UsersController::class)->group(function () {
            Route::get('users', 'index')->name('users');
            Route::get('view/user/{id}', 'view')->name('view.user');
            Route::put('user/ban', 'ban')->name('user.ban');
            Route::put('user/unban', 'unBan')->name('user.unban');
        });

        Route::controller(\App\Http\Controllers\Admin\ReportController::class)->group(function () {
            Route::get('report/view/{report_id}', 'index')->name('report.view');
        });

        Route::controller(\App\Http\Controllers\Admin\CommentsController::class)->group(function () {
            Route::get('comments', 'index')->name('comments');
            Route::get('view/comment/{id}', 'view')->name('view.comment');
            Route::put('decline/comment', 'decline')->name('decline.comment');
        });
    });

    Route::middleware('admin')->group(function () {
        Route::controller(\App\Http\Controllers\Admin\AdminController::class)->group(function () {
            Route::get('admins', 'admins')->name('admins');
            Route::get('moders', 'moders')->name('moders');
        });

        Route::controller(\App\Http\Controllers\Admin\UsersController::class)->group(function () {
            Route::post('user/add/role/moder', 'addModerRole')->name('user.add.role.moder');
            Route::delete('user/remove/role/moder', 'removeModerRole')->name('user.remove.role.moder');
        });
    });
});
