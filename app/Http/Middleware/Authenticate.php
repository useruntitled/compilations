<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Authenticate
{
    protected $auth;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    public function handle($request, Closure $next)
    {
        if (! $this->auth::check() ){
            return redirect()->back();
        }

        if(Auth::user()->isBanned) {
            Auth::logout();
            return redirect()->route('banned');
        };

        return $next($request);
    }
}
