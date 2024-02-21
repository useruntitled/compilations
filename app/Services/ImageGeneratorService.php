<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Encoders\JpegEncoder;
use Intervention\Image\ImageManager;

class ImageGeneratorService
{
    public function make(): string
    {
        $hashName = Str::random(40);

        $randomColor = fake()->hexColor();

        $image = ImageManager::imagick()
            ->create(config('image.default_dimensions'), config('image.default_dimensions'))
            ->fill($randomColor)
            ->encode(new JpegEncoder());

        $previewImage = ImageManager::imagick()->create(
            config('image.preview_dimensions'), config('image.preview_dimensions')
        )->fill($randomColor)->blur(3)->encode(new JpegEncoder());

        Storage::disk('media')->put($hashName . '.jpeg', $image);
        Storage::disk('media')->put($hashName . '__preview' . '.jpeg', $previewImage);

        return $hashName . '.jpeg';
    }
}
