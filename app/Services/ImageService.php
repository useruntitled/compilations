<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;

class ImageService
{
    const EXTS = ['png','jpeg','jpg'];
    const DEFAULT_IMAGE_AVATAR_USER_VALUE = 'Default.jpg';
    const DEFAULT_IMAGE_AVATAR_USER_ENCODING = 'jpg';
    const CACHE_MINUTES = 1000;


    protected $uploads_path;

    public function __construct()
    {
        $this->uploads_path = config('storage_path');
    }

    protected function getSize($dimensions)
    {
        list($width, $height) = explode('x', $dimensions);
        return array($width, $height);
    }

    public function upload()
    {

    }

    protected function response($image, $encoding)
    {
        $content = $image->encode($encoding)->getEncoded();
        return response($content)->header('Content-Type', 'image/' . $encoding);
    }

    protected function getAndResponse($key)
    {
        return response(Cache::get($key))->header('Content-Type', 'image/jpg');
    }

    public function getUnhashed($path, $dimensions)
    {
        // list($w,$h) = $this->getSize($dimensions);
        list($ext,$encoding) = $this->findExtensionAndEncoding($path);

        if($ext == null) return false;
        
        $path .= $ext;

        $key = $this->generateKey($path,$dimensions);

        if($this->isCached($key)){
            return $this->getAndResponse($key);
        }


        return $this->cropAndCache($path, $encoding, $dimensions);
    }

    /**
     * Поступает путь изображения (Да, хеш. Но просто отвечает за имя файла)
     */
    public function get($path, $dimensions)
    {
        if($path == self::DEFAULT_IMAGE_AVATAR_USER_VALUE) return $this->getAvatarByDefault($dimensions);

        list($ext, $encoding) = $this->findExtensionAndEncoding($path);
        if($ext == null) abort(404);

        if($this->isCached("image:$path:$dimensions")){
            return $this->getAndResponse("image:$path:$dimensions");
        }

        return $this->cropAndCache($path, $encoding, $dimensions);
    }

    protected function getAvatarByDefault($dimensions)
    {
        $path = public_path('storage\\' .  self::DEFAULT_IMAGE_AVATAR_USER_VALUE);

        if($this->isCached("image:$path:$dimensions")){
            return $this->getAndResponse("image:$path:$dimensions");
        }

        return $this->cropAndCache($path, SELF::DEFAULT_IMAGE_AVATAR_USER_ENCODING, $dimensions);
    }

    protected function findExtensionAndEncoding($path)
    {
        foreach(SELF::EXTS as $ext){
            if(file_exists($path . '.' . $ext)){
                $encoding = pathinfo($path . '.' . $ext,PATHINFO_EXTENSION);
                $extension = '.' . $encoding;
                // $i = file_get_contents($path . $extension);
                // return response($i)->header('Content-Type','image/' . $encoding);
                return array($extension,$encoding);
            }
        }
        return array(null, null);
    }

    protected function cropAndCache($path, $encoding, $dimensions)
    {
        list($w,$h) = $this->getSize($dimensions);
        $image = Image::make($path)->fit($w,$h);
        // $content = $image->encode($encoding)->getEncoded();
        // return response($content)->header('Content-Type', 'image/' . $encoding);

        $content = $image->encode($encoding)->getEncoded();
        Cache::put($this->generateKey($path,$dimensions), $content, now()->addMinutes(self::CACHE_MINUTES));
        return $this->response($image, $encoding);
    }

    protected function generateKey($path,$dimensions)
    {
        return "image:$path:$dimensions";
    }

    protected function generateAvatarKey()
    {

    }

    protected function isCached($key)
    {
        return Cache::has($key) == 1;
    }
}