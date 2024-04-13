<?php

namespace App\Providers;

use App\Services\Parser\KinopoiskDotDevParser;
use App\Services\Parser\Parser;
use Illuminate\Support\ServiceProvider;

class ParserServiceProvider extends ServiceProvider
{
    public array $bindings = [
        Parser::class => KinopoiskDotDevParser::class,
    ];

    public function register(): void
    {

    }
}
