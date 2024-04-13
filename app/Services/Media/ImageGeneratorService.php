<?php

namespace App\Services\Media;

use App\DTO\MediaData;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;

class ImageGeneratorService
{
    public static function make(?int $width = null, ?int $height = null): MediaData
    {
        $hashName = Str::uuid();

        if ($width == null) {
            $width = config('image.default_dimensions');
        }
        if ($height == null) {
            $height = config('image.default_dimensions');
        }

        $randomColor = fake()->hexColor();

        $notEncodedImage = ImageManager::imagick()
            ->create($width, $height)
            ->fill($randomColor);

        $encodedImage = $notEncodedImage->toJpeg();

        Storage::disk('media')->put($hashName.'.jpeg', $encodedImage);

        $data = new MediaData([
            'uuid' => $hashName,
            'width' => config('image.default_dimensions'),
            'height' => config('image.default_dimensions'),
            'format' => 'jpeg',
            'duration' => null,
            'base64_preview' => Base64Generator::make($notEncodedImage, 'jpg'),
        ]);

        return $data;
    }
}
