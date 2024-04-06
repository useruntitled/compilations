<?php

namespace App\Services\Media;

use Intervention\Image\Encoders\JpegEncoder;
use Intervention\Image\ImageManager;
use Intervention\Image\Interfaces\ImageInterface;

class Base64Generator
{
    public static function make(ImageInterface $file, $format)
    {
        if ($format != 'gif') {
            try {
                $file = $file->scaleDown(5, 5)->blur(3)->encodeByMediaType();
            } catch (\Exception $e) {
                $file = $file->scaleDown(5, 5)->blur(3)->toJpeg();
            }

            return 'data:image/'.$format.';base64,'.base64_encode($file);
        }
        //        $color = $file->pickColor(0, 0, 0)->toHex();

        //        $file = ImageManager::imagick()
        //            ->create(5, 5)
        //            ->fill($color)
        //            ->blur(3)
        //            ->encode(new JpegEncoder());

        $file = $file
            ->removeAnimation('50%')
            ->scaleDown(5)
            ->blur(3)
            ->encode(new JpegEncoder());

        return 'data:image/'.'jpeg'.';base64,'.base64_encode($file);
    }
}
