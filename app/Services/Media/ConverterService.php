<?php

namespace App\Services\Media;

use FFMpeg\FFMpeg;
use FFMpeg\Format\Video\X264;
use Illuminate\Support\Facades\Storage;

class ConverterService
{
    public static function gifToMp4($path, $name): void
    {

        $ffmpeg = FFMpeg::create(array(
            'ffmpeg.binaries' => '/usr/bin/ffmpeg',
            'ffprobe.binaries' => '/usr/bin/ffprobe',
            'timeout' => 6600, // The timeout for the underlying process
            'ffmpeg.threads' => 1,   // The number of threads that FFMpeg should use
        ));

        $video = $ffmpeg->open($path);

        $format = new X264('libvo_aacenc', 'libx264');
        $format->setAdditionalParameters(array('-profile:v', 'baseline', '-pix_fmt', 'yuv420p', '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2'));

        $video
            ->save($format, media_path($name . '.mp4'));
    }
}
