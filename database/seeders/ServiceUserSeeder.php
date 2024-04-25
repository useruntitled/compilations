<?php

namespace Database\Seeders;

use App\DTO\MediaData;
use App\Enums\UserRole;
use App\Models\Role;
use App\Models\User;
use App\Services\Media\MediaUploader;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ServiceUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::factory()->state([
            'name' => 'Недоступно',
        ])
            ->create();

        $user->ban('service reason');

        $user->rolesRelation()->attach(Role::where('name', UserRole::SERVICE_DELETED_ACCOUNT)->first()->id);

        $uuid = Str::uuid();

        $user->mediaRelation()->delete();
        $trashedImage = new MediaData([
            'uuid' => $uuid,
            'user_id' => $user->id,
            'width' => 1000,
            'height' => 1000,
            'format' => 'webp',
            'href' => route('media.view', $uuid),
            'base64_preview' => 'data:image/'.'jpeg'.';base64,'.base64_encode(Storage::disk('public')->get('trashed.webp')),
            'duration' => null,
            'file' => Storage::disk('public')->get('trashed.webp'),
        ]);
        Storage::disk('media')->put($uuid.'.webp', Storage::disk('public')->get('trashed.webp'));
        MediaUploader::upload($trashedImage, $user);
    }
}
