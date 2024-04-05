<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Services\Media\MediaHandler;
use App\Services\Media\MediaService;
use App\Services\Media\MediaUploader;
use App\Services\TelegramNotifier;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class MediaController extends Controller
{
    protected MediaService $service;

    public function __construct(MediaService $service)
    {
        $this->service = $service;
    }

    public function index($filename, $scale = null)
    {
        return $this->service->get($filename, $scale);
    }

    public function uploadWithoutSave(Request $request, MediaHandler $handler)
    {
        if (!$request->hasFile('image')) abort(422);
        $handledData = $handler->handle($request->file('image'));
        $format = $handledData->format == 'mp4' ? 'gif' : $handledData->format;

        MediaUploader::save($handledData->file->getPathName(), $handledData->id, $format, file_get_contents($handledData->file));
        $model = Media::create([
            ...(array)$handledData->except('file'),
            'user_id' => Auth::id(),
        ]);
        return response()->json($model);
    }
}
