<?php

namespace App\Traits;

use App\Models\Media;
use App\Services\Media\ImageGeneratorService;
use App\Services\Media\MediaUploader;
use Illuminate\Database\Eloquent\Relations\MorphOne;

trait HasAvatar
{
    public function avatar(): MorphOne
    {
        return $this->morphOne(Media::class, 'media_to')->latest();
    }

    public function generateAvatar(): void
    {
        $image = ImageGeneratorService::make();

        MediaUploader::upload($image, [
            'object' => 'user',
            'object_id' => $this->id,
        ]);
    }
}
