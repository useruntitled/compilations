<?php

namespace App\Services\Media;


use App\DTO\MediaData;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Interfaces\ImageInterface;

class MediaHandler
{
    protected Base64Generator $base64Generator;
    protected ConverterService $converter;

    public function __construct(Base64Generator $base64Generator)
    {
        $this->base64Generator = $base64Generator;
    }

    public function handle(UploadedFile $uploadedFile)
    {
        $uuid = Str::uuid();

        if ($uploadedFile == null) abort(422);

        $file = ImageManager::imagick()->read($uploadedFile->getPathname());


        $name = $uuid . '.' . $this->getFormat($uploadedFile->hashName());

        $data = new MediaData([
            'id' => $uuid,
            'width' => $this->getWidth($file),
            'height' => $this->getHeight($file),
            'format' => $this->getFormat($name) == 'gif' ? 'mp4' : $this->getFormat($name),
            'duration' => null,
            'base64_preview' => $this->base64Generator->make($file, $this->getFormat($name)),
        ]);


        $data->file = $uploadedFile;

        if (!$this->isGif($name)) {
//            Storage::disk('media')->put($name, file_get_contents($uploadedFile));

            return $data;
        }

        $data->duration = $this->getDuration($file);

        return $data;
    }

    public function getFormat($path)
    {
        return pathinfo($path, PATHINFO_EXTENSION);
    }

    public function isGif($path)
    {
        return $this->getFormat($path) == 'gif';
    }

    public function getDuration(ImageInterface $gif)
    {
        return $gif->loops();
    }

    public function getWidth($file)
    {
        return $file->width();
    }

    public function getHeight($file)
    {
        return $file->height();
    }

    public function getColor($file)
    {
        return '#ffffff';
    }
}
