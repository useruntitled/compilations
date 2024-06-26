<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Services\Media\MediaHandler;
use App\Services\Media\MediaService;
use App\Services\Media\MediaUploader;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MediaController extends Controller
{
    public function __construct(protected MediaService $service)
    {
    }

    public function index($filename, $scale = null)
    {
        return $this->service->get($filename, $scale);
    }

    public function uploadWithoutSave(Request $request, MediaHandler $handler)
    {
        if (! $request->hasFile('image')) {
            abort(422);
        }

        $handledData = $handler->handle($request->file('image'));

        MediaUploader::save($handledData);

        Media::create([
            ...(array) $handledData->except('file'),
            'user_id' => Auth::id(),
        ]);

        return response()->json($handledData->except('file'));
    }
}
