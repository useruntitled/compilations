<?php

namespace App\Services\Media;

use App\DTO\MediaData;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Encoders\JpegEncoder;
use Intervention\Image\ImageManager;

class ImageGeneratorService
{
    public static function make()
    {
        $hashName = Str::uuid();

        $randomColor = fake()->hexColor();

        $notEncodedImage = ImageManager::imagick()
            ->create(config('image.default_dimensions'), config('image.default_dimensions'))
            ->fill($randomColor);


        $scaled_down = $notEncodedImage->scaleDown(5)->blur(3)->toJpeg();
        $encodedImage = $notEncodedImage->toJpeg();

        Storage::disk('media')->put($hashName . '.jpeg', $encodedImage);


        $path = media_path($hashName . '.jpeg');

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
