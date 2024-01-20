<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index()
    {
        return inertia('Auth/Settings/Index');
    }

    public function blog()
    {
        return inertia('Auth/Settings/Blog');
    }
}
