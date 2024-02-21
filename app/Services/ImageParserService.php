<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Encoders\JpegEncoder;
use Intervention\Image\ImageManager;

class ImageParserService
{
    public function get(string $uri): string
    {
        $im = file_get_contents($uri);
        $filename = Str::random(40);

        $image = ImageManager::imagick()->read($im)->encode(new JpegEncoder);

        $previewImage = ImageManager::imagick()->read($im)->scaleDown(15)->blur(3)->encode(new JpegEncoder);

        Storage::disk('media')->put($filename . '.jpeg', $image);
        Storage::disk('media')->put($filename . '__preview' . '.jpeg', $previewImage);

        return $filename . '.jpeg';
    }
}
