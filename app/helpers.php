<?php

if (! function_exists('media_path')) {
    function media_path(string $filename)
    {
        return public_path(config('image.path').$filename);
    }
}

if (! function_exists('rtrimbr')) {
    function rtrimbr($text)
    {
        return preg_replace('/(<div><br><\/div>\s*)+$/', '', $text);
    }
}

if (! function_exists('getModel')) {
    function getModel($name)
    {
        return \Illuminate\Database\Eloquent\Relations\Relation::getMorphedModel(strtolower($name));
    }
}
