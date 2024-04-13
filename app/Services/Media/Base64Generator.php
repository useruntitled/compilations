<?php

namespace App\Services\Media;

use Intervention\Image\Encoders\JpegEncoder;
use Intervention\Image\Interfaces\ImageInterface;

class Base64Generator
{
    public static function make(ImageInterface $file, string $format): string
    {
        if ($format != 'gif') {
            try {
                $file = $file->scaleDown(5, 5)->blur(3)->encodeByMediaType();
            } catch (\Exception $e) {
                $file = $file->scaleDown(5, 5)->blur(3)->toJpeg();
            }

            return 'data:image/'.$format.';base64,'.base64_encode($file);
        }

        $file = $file
            ->removeAnimation('50%')
            ->scaleDown(5)
            ->blur(3)
            ->encode(new JpegEncoder());

        return 'data:image/'.'jpeg'.';base64,'.base64_encode($file);
    }
}
