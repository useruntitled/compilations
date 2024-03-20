<?php

namespace App\Services\Media;

use App\Models\Media;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class MediaService
{
    protected MediaHandler $handler;

    public function __construct(MediaHandler $handler)
    {
        $this->handler = $handler;
    }

    public function get(string $filename, ?int $scale)
    {
        $result = Cache::remember("image:$filename", now()->addDays(7), function () use ($filename) {
            $media = Media::findOrFail($filename);

            $type = $media->format == 'mp4' ? 'video' : 'image';

            return response(file_get_contents(media_path($filename . '.' . $media->format)))
                ->header('Content-Type', "$type/$media->format")
                ->header('Content-Disposition', 'inline')
                ->header('X-Content-Type-Options', 'nosniff');
        });
        return $result;
    }

    public function upload(UploadedFile $file, $object)
    {
        $handledData = $this->handler->handle($file);

        if ($handledData->format != 'mp4') {
            MediaUploader::save($handledData->file->getPathName(), $handledData->id, $handledData->format, file_get_contents($handledData->file));
        } else {
            MediaUploader::save($handledData->file->getPathName(), $handledData->id, 'gif', file_get_contents($handledData->file));
        }

        MediaUploader::upload($handledData, $object);

        return $handledData;
    }

    public static function delete($media)
    {
        Storage::disk('media')->delete($media->id);
        $media->delete();
    }
}
