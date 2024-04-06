<?php

namespace App\Services\Media;

use App\DTO\MediaData;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Encoders\JpegEncoder;
use Intervention\Image\ImageManager;

class ImageParserService
{
    public function make(string $uri)
    {
        $im = file_get_contents($uri);
        $hashName = Str::uuid();

        $notEncodedImage = ImageManager::imagick()->read($im)
            ->scale(config('image.default_dimensions'), config('image.default_dimensions'));

        $encodedImage = $notEncodedImage->encode(new JpegEncoder);

        Storage::disk('media')->put($hashName . '.jpeg', $encodedImage);

        $data = new MediaData([
            'id' => $hashName,
            'width' => config('image.default_dimensions'),
            'height' => config('image.default_dimensions'),
            'format' => 'jpeg',
            'duration' => null,
            'base64_preview' => Base64Generator::make($notEncodedImage, 'jpg'),
        ]);

        return $data;
    }
}
