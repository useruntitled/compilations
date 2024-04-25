<?php

namespace App\Traits;

use App\Services\Media\ImageGeneratorService;
use App\Services\Media\MediaUploader;
use Illuminate\Database\Eloquent\Casts\Attribute;

trait HasAvatar
{
    use HasMedia;

    protected function avatar(): Attribute
    {
        return Attribute::get(fn () => $this->mediaRelation);
    }

    public function makeAvatar(): void
    {
        MediaUploader::upload(ImageGeneratorService::make(), $this);
    }
}
