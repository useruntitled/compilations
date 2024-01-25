<?php

namespace App\Http\Controllers;

use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Response;
use Intervention\Image\Facades\Image;

class ImageController extends Controller
{
    protected $service;

    public function __construct(ImageService $service)
    {
        $this->service = $service;
    }

    /**
     * Show image.
     * Global storage path.
     */
    public function index($filename,$scale)
    {
        return $this->service->get($filename, $scale);
    }

    public function upload($file)
    {
        
    }

    // public static function crop($filename, $dimensions)
    // {
    //     // Разбиваем размеры на ширину и высоту
    //     list($width, $height) = explode('x', $dimensions);
    //     $filename = str_replace('.','\\',$filename);
    //     // $filename = str_replace('\\png','',$filename);

    //     $path = public_path('storage\\' . $filename);


    //     $exts = ['png','jpeg','jpg'];
    //     foreach($exts as $ext){
    //         if(file_exists($path . '.' . $ext)){
    //             $encoding = pathinfo($path . '.' . $ext,PATHINFO_EXTENSION);
    //             $extension = '.' . $encoding;
    //         }
    //     }

    //     // return Response::json($path,200);

    //     $path .= $extension;
    //     $filename .= $extension;
    //     $cacheKey = 'image.' . $filename . '.' . $dimensions;
    //     // Создайте уникальный ключ для кэширования
    //     if (!file_exists($path)) {
    //         abort(404);
    //     }
    //     // Проверьте, есть ли изображение в кэше
    //     if (Cache::has($cacheKey)) {
    //         // Если есть, верните его из кэша
    //         return response(Cache::get($cacheKey))->header('Content-Type', 'image/' . $encoding);
    //     }



    //     // Получаем полный путь к изображению
        

    //     // Обрезаем изображение с помощью Intervention Image
    //     $image = Image::make($path)->fit($width, $height);

    //     // Получите содержимое обрезанного изображения
    //     $content = $image->encode($encoding)->getEncoded();

    //     // Сохраните содержимое в кэше
    //     Cache::put($cacheKey, $content, now()->addMinutes(60)); // Здесь 60 - время жизни кэша в минутах

    //     // Отправьте обрезанное изображение в браузер
    //     return response($content)->header('Content-Type', 'image/' . $encoding);
    // }

}
