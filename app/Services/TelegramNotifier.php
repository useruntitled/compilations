<?php

namespace App\Services;

class TelegramNotifier
{
    public static function text($text)
    {
        $token = env('TELEGRAM_API_TOKEN');
        $chat_id = env('TELEGRAM_API_CHAT_ID');

        $url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$text";

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'Curl error: ' . curl_error($ch);
        }
        curl_close($ch);

        curl_close($ch);
    }
}
