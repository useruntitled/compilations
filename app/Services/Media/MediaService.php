<?php

namespace App\Services\Media;

use App\DTO\MediaData;
use App\Models\Media;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class MediaService
{
    public function __construct(protected MediaHandler $handler)
    {
    }

    public function get(string $filename, ?int $scale)
    {
        $result = Cache::remember("image:$filename", now()->addDays(7), function () use ($filename) {
            $media = Media::findOrFail($filename);

            $type = $media->format == 'mp4' ? 'video' : 'image';

            return response(file_get_contents(media_path($filename.'.'.$media->format)))
                ->header('Content-Type', "$type/$media->format")
                ->header('Content-Disposition', 'inline')
                ->header('X-Content-Type-Options', 'nosniff');
        });

        return $result;
    }

    public function upload(UploadedFile $file, $eloquent): MediaData
    {
        $handledData = $this->handler->handle($file);

        MediaUploader::save($handledData);

        MediaUploader::upload($handledData, $eloquent);

        return $handledData;
    }

    public static function delete($media): void
    {
        Storage::disk('media')->delete($media->uuid);
        $media->delete();
    }
}
