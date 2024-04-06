<?php

namespace App\Providers;

use App\Services\Parser\KinopoiskDotDevParser;
use App\Services\Parser\ParserInterface;
use Illuminate\Support\ServiceProvider;

class ParserServiceProvider extends ServiceProvider
{
    public array $bindings = [
        ParserInterface::class => KinopoiskDotDevParser::class,
    ];

    public function register(): void
    {

    }
}
