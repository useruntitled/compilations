<?php

namespace App\Services;

use http\Client\Response;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\Encoders\JpegEncoder;
use Intervention\Image\Encoders\WebpEncoder;
use Intervention\Image\Facades\Image;
use Intervention\Image\ImageManager;
use Illuminate\Support\Str;

class ImageService
{

    protected string $upload_path;

    public function __construct()
    {
        $this->upload_path = public_path('media/');
    }

    public function get(string $filename, int $scale): \Illuminate\Http\Response
    {
        $path = $this->upload_path.$filename;
        $key = $this->getCacheKey($filename, $scale);

        $image = Cache::remember($key, now()->addMinutes(config('image.cache_minutes')), function () use ($scale, $path) {
            $content = ImageManager::imagick()
                ->read($path)
                ->scale(width: $scale)
                ->encodeByMediaType();
            return $this->response($content);
        });

        return $image;
    }

    protected function response($image): \Illuminate\Http\Response
    {
        return response($image)->header('Content-Type', 'image/jpg');
    }

    protected function getCacheKey(string $filename, int $scale): string
    {
        return "image:$filename:$scale";
    }

    public function uploadAndDelete(UploadedFile $file, ?string $old): string
    {
        $name = $file->hashName();

        $file = ImageManager::imagick()->read($file->getPathname())
            ->scaleDown(config('image.default_dimensions'), config('image.default_dimensions'))
            ->encodeByMediaType();

        Storage::disk('media')->put($name, $file);

        $path = $name;

        if($path === false) abort(500, 'Ошибка при сохранении файла');
        [$new_file_name, $new_file_ext] = explode('.', $path);

        $file_preview = ImageManager::imagick()->read(media_path($name))
            ->scaleDown(config('image.preview_dimensions'))
            ->blur(3)
            ->encodeByPath();
        Storage::disk('media')->put($new_file_name.'__preview'.".$new_file_ext", $file_preview);

        if($old) $this->delete($old);

        return $path;
    }

    public function delete(?string $filename = null): void
    {
        if($filename == null) return;
        [$name, $ext] = explode('.', $filename);

        Storage::disk('media')->delete($filename);
        Storage::disk('media')->delete($name.'__preview'.".$ext");
    }
}
