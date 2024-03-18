<?php

namespace App\Observers;

use App\Models\Media;
use Illuminate\Support\Facades\Storage;

class MediaObserver
{
    public function created(Media $media)
    {
        $previousMedia = Media::where('media_to_type', '=', $media->media_to_type)
            ->where('media_to_type', '!=', null)
            ->where('media_to_id', '=', $media->media_to_id)
            ->oldest()
            ->get();
        if ($previousMedia->count() > 1) {
            $previousMedia = $previousMedia->first();
            if (Storage::disk('media')->delete($previousMedia->id . '.' . $previousMedia->format)) {
                $previousMedia->delete();
            }
        }
    }
}
