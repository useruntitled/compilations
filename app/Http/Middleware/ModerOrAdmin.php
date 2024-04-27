<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class ModerOrAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::user() && (Auth::user()->is_moder || Auth::user()->is_admin)) {
            return $next($request);
        }

        
        return redirect(route('home'))->with(403);
    }
}
