<?php

namespace App\Services\Media;

use App\DTO\MediaData;
use App\Models\Media;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class MediaUploader
{
    public static function upload(MediaData $data, $eloquent): void
    {

        $data = (array) $data->except('file');

        $user_id = $eloquent->user?->id != null ? $eloquent->user->id : (Auth::id() != null ? Auth::id() : $eloquent->id);

        Media::create([
            ...$data,
            'user_id' => $user_id,
            'media_to_type' => get_class($eloquent),
            'media_to_id' => $eloquent->id,
        ]);
    }

    public static function toEloquent(string $uuid, $eloquent): void
    {
        $media = Media::where('uuid', $uuid)->firstOrFail();
        $media->media_to_type = get_class($eloquent);
        $media->media_to_id = $eloquent->id;
        $media->save();
    }

    public static function save(MediaData $media): void
    {
        $format = $media->format == 'mp4' ? 'gif' : $media->format;

        if ($format == 'gif') {
            ConverterService::gifToMp4($media);
        } else {
            Storage::disk('media')->put($media->uuid.'.'.$format, file_get_contents($media->file));
        }
    }
}
