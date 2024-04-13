<?php

namespace App\DTO;

class MediaData extends DTO
{
    public $uuid;

    public $href;

    public $format;

    public $width;

    public $height;

    public $base64_preview;

    public $duration;

    public $file;

    public function __construct($data)
    {
        $this->uuid = $data['uuid'];
        $this->href = route('media.view', $data['uuid']);
        $this->format = $data['format'];
        $this->width = $data['width'];
        $this->height = $data['height'];
        $this->base64_preview = $data['base64_preview'];
        $this->duration = $data['duration'];
        $this->file = $data['file'] ?? null;
    }
}
