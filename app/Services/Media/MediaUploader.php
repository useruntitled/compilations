<?php

namespace App\Services\Media;

use App\DTO\MediaData;
use App\Models\Comment;
use App\Models\Media;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;


class MediaUploader
{

    public static function upload(MediaData $data, $object): void
    {

        $array = (array)$data->except('file');

        $model = get_class($object);

        Media::create([
            ...$array,
            'user_id' => Auth::id() ?? $object->id,
            'media_to_type' => Relation::getMorphedModel($model),
            'media_to_id' => $object->id,
        ]);
    }

    public static function toObject($href, array $object)
    {
        $media = Media::where('href', '=', $href)->firstOrFail();
        $media->media_to_type = Relation::getMorphedModel($object['object']);
        $media->media_to_id = $object['object_id'];
        $media->save();
    }

    public static function save($path, $name, $format, $file)
    {
        if ($format == 'gif') {
            ConverterService::gifToMp4($path, $name);
        } else {
            Storage::disk('media')->put($name . '.' . $format, $file);
        }
    }
}
