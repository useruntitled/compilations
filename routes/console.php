<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('sitemap:generate', function () {
    (new \App\Console\Commands\GenerateSitemap)->handle();
});
