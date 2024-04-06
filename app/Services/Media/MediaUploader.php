<?php

namespace App\Services\Media;

use App\DTO\MediaData;
use App\Models\Media;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class MediaUploader
{
    public static function upload(MediaData $data, $eloquent): void
    {

        $array = (array) $data->except('file');

        $model = get_class($eloquent);

        $user_id = $eloquent->user?->id != null ? $eloquent->user->id : (Auth::id() != null ? Auth::id() : $eloquent->id);

        Media::create([
            ...$array,
            'user_id' => $user_id,
            'media_to_type' => Relation::getMorphedModel($model),
            'media_to_id' => $eloquent->id,
        ]);
    }

    public static function toEloquent($href, $eloquent)
    {
        $media = Media::where('href', '=', $href)->firstOrFail();
        $media->media_to_type = Relation::getMorphedModel(get_class($eloquent));
        $media->media_to_id = $eloquent->id;
        $media->save();
    }

    public static function save($path, $name, $format, $file)
    {
        if ($format == 'gif') {
            ConverterService::gifToMp4($path, $name);
        } else {
            Storage::disk('media')->put($name.'.'.$format, $file);
        }
    }
}
