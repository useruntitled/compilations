<?php

namespace App\Http\Controllers;

class SettingsController extends Controller
{
    public function index()
    {
        return inertia('Auth/Settings/Index');
    }

    public function profile()
    {
        return inertia('Auth/Settings/Profile');
    }
}
