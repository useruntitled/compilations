<?php

namespace App\Services;

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
    public const EXTS = ['png', 'jpeg', 'jpg'];

    public const DEFAULT_IMAGE_AVATAR_USER_VALUE = 'Default.jpg';

    public const DEFAULT_IMAGE_AVATAR_USER_ENCODING = 'jpg';

    public const CACHE_MINUTES = 1000;

    protected $upload_path;

    protected $filename;

    protected $path;

    protected $key;

    public function __construct()
    {
        $this->upload_path = public_path('media/');
    }

    public function get($filename, $scale)
    {
        $this->filename = $filename;
        $this->path = $this->upload_path.$filename;
        $this->key = $this->generateKey($filename, $scale);

        if ($this->isCached()) {
            return $this->getAndResponse();
        }

        return $this->scaleAndCache($scale);
    }

    public function generateDefaultUserAvatar(): string
    {
        $base64 = config('image.default_image');

        $hashname = Str::random(40);

        $randomColor = fake()->hexColor();

        $image = ImageManager::imagick()->create(1000,1000)->fill($randomColor)->encode(new JpegEncoder());
        $previewImage = ImageManager::imagick()->create(15, 15)->fill($randomColor)->blur(3)->encode(new JpegEncoder());

        Storage::disk('media')->put($hashname . '.jpeg', $image);
        Storage::disk('media')->put($hashname . '__preview' . '.jpeg', $previewImage);

        return $hashname . '.jpeg';
    }

    public function parseProviderUserAvatar($url): string
    {
        $im = file_get_contents($url);
        $filename = Str::random(40);

        $image = ImageManager::imagick()->read($im)->encode(new JpegEncoder);

        $previewImage = ImageManager::imagick()->read($im)->scaleDown(15)->blur(3)->encode(new JpegEncoder);

        Storage::disk('media')->put($filename . '.jpeg', $image);
        Storage::disk('media')->put($filename . '__preview' . '.jpeg', $previewImage);

        return $filename . '.jpeg';
    }

    protected function isCached(): bool
    {
        return Cache::has($this->key) == 1;
    }

    protected function scaleAndCache($scale)
    {
        $image = ImageManager::imagick()->read($this->upload_path.$this->filename);
        if(str_contains($image->origin()->mediaType(), 'gif')) {
            return $this->response(Storage::disk('media')->get($this->filename));
        }
        return $this->response(ImageManager::imagick()->read($this->upload_path.$this->filename)->scale(width: $scale)->encodeByMediaType());

        $content = $image;
        Cache::put($this->key, $content, now()->addMinutes(self::CACHE_MINUTES));

        return $this->response($image);
    }

    protected function response($image)
    {
        $content = $image;

        return response($content)->header('Content-Type', 'image/jpg');
    }

    protected function getAndResponse()
    {
        return response(Cache::get($this->key))->header('Content-Type', 'image/jpg');
    }

    protected function generateKey($filename, $scale)
    {
        return "image:$filename:$scale";
    }

    public function uploadAndDelete(UploadedFile $file, ?string $old, ?bool $allowGif = false): string
    {
        $this->delete($old);

        $name = $file->hashName();

        // $path = $file->storePubliclyAs('media', $name, 'media');
        $path = Storage::disk('media')->put(null, $file);
        if($path === false) abort(500, 'Ошибка при сохранении файла');
        [$new_file_name, $new_file_ext] = explode('.', $path);
        // $file_preview = Image::make(public_path("media\\$path"))->resize(width: 30);
        $file_preview = ImageManager::imagick()->read(media_path($path))->scaleDown(width: 15)->blur(3)->encodeByPath();
        Storage::disk('media')->put($new_file_name.'__preview'.".$new_file_ext", $file_preview);

        return $path;
    }

    public function delete($filename): void
    {
        if ($filename == null || $filename == 'Default.jpg') {
            return;
        }

        [$name, $ext] = explode('.', $filename);

        Storage::disk('media')->delete($filename);
        Storage::disk('media')->delete($name.'__preview'.".$ext");
    }
}
