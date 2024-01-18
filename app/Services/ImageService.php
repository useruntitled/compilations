<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class ImageService
{
    const EXTS = ['png','jpeg','jpg'];
    const DEFAULT_IMAGE_AVATAR_USER_VALUE = 'Default.jpg';
    const DEFAULT_IMAGE_AVATAR_USER_ENCODING = 'jpg';
    const CACHE_MINUTES = 1000;


    protected $uploads_path;
    protected $filename;
    protected $path;
    protected $key;

    public function __construct()
    {
        $this->uploads_path = public_path('storage\\');
    }

    protected function getSize($dimensions)
    {
        list($width, $height) = explode('x', $dimensions);
        return array($width, $height);
    }

    public function uploadAndDelete($file, $old)
    {
        if($old != null) Storage::disk('public')->delete($old);
        $name = $file->hashName();
        $path = $file->storePubliclyAs('public',$name);
        return $name;
    }

    protected function response($image)
    {
        $content = $image->getEncoded();
        return response($content)->header('Content-Type', 'image/jpg' );
    }

    protected function getAndResponse()
    {
        return response(Cache::get($this->key))->header('Content-Type', 'image/jpg');
    }

    /**
     * Filename like P5WuyYVLVUcmcffkGwQJb8mxqVKdVPAkvTPOqEbc.jpg or 'Default.jpg'
     * Path like C:\OSPanel\domains\compilations\public\storage\P5WuyYVLVUcmcffkGwQJb8mxqVKdVPAkvTPOqEbc.jpg
     */
    public function get($filename, $dimensions)
    {
        $this->filename = $filename;
        $this->path = $this->uploads_path . $filename;
        $this->key = $this->generateKey($filename,$dimensions);

        if($filename == self::DEFAULT_IMAGE_AVATAR_USER_VALUE) return $this->getAvatarByDefault($dimensions);

        if($this->isCached()){
            return $this->getAndResponse();
        }

        return $this->cropAndCache($dimensions);
    }

    protected function getAvatarByDefault($dimensions)
    {
        if($this->isCached()){
            return $this->getAndResponse();
        }

        return $this->cropAndCache($dimensions);
    }

    protected function cropAndCache($dimensions)
    {
        list($w,$h) = $this->getSize($dimensions);
        $image = Image::make($this->path)->fit($w,$h);

        $content = $image->encode()->getEncoded();
        Cache::put($this->key, $content, now()->addMinutes(self::CACHE_MINUTES));
        return $this->response($image);
    }

    protected function generateKey($filename,$dimensions)
    {
        return "image:$filename:$dimensions";
    }


    protected function isCached()
    {
        return Cache::has($this->key) == 1;
    }
}