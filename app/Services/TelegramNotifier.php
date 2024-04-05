<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class TelegramNotifier
{
    public static function text($text)
    {
        $token = env('TELEGRAM_API_TOKEN');
        $chat_id = env('TELEGRAM_API_CHAT_ID');

        $url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$text";
        Http::get($url);
    }
}
