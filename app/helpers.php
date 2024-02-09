<?php

if (! function_exists('media_path')) {
    function media_path(string $filename)
    {
        return public_path(config('image.path').$filename);
    }
}
