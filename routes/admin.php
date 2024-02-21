<?php

Route::middleware('moderOrAdmin')->group(function() {
   Route::controller(\App\Http\Controllers\AdminController::class)->group(function() {
       Route::get('panel', 'index')->name('panel.index');
       Route::get('panel/object/creator/{user_id}/view', 'viewObjectCreator')->name('panel.object.creator.view');
       Route::get('panel/object/{report_id}/view', 'viewObject')->name('panel.object.view');
       Route::delete('panel/post', 'deletePost')->name('panel.post.delete');
       Route::patch('panel/users/ban', 'ban')->name('panel.user.ban');
       Route::get('panel/users', 'users')->name('panel.users');
   });
});

Route::middleware('admin')->group(function() {
   Route::controller(\App\Http\Controllers\AdminController::class)->group(function () {
      Route::get('panel/admins', 'admins')->name('panel.admins');
      Route::get('panel/moders', 'moders')->name('panel.moders');
   });
});