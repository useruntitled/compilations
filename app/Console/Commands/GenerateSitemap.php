<?php

namespace App\Console\Commands;

use App\Models\Post;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate the sitemap.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): void
    {

        $token = 'YOUR_BOT_TOKEN'; // Замените на ваш токен Telegram Bot
        $chatId = 'CHAT_ID'; // Замените на chat_id получателя
        $message = 'Попытка сгенерировать сайтмапу'; // Ваше сообщение

        $url = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chatId}&text={$message}";

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);

        if ($response === false) {
            echo 'Ошибка при выполнении запроса: ' . curl_error($ch);
        } else {
            echo 'Запрос успешно выполнен. Ответ сервера: ' . $response;
        }

        curl_close($ch);



        Sitemap::create(config('app.url'))
            ->add(Url::create('/')
                ->setLastModificationDate(Carbon::yesterday())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_HOURLY)
                ->setPriority(1))
            ->add(Url::create('/new')
                ->setLastModificationDate(Carbon::yesterday())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_HOURLY)
                ->setPriority(0.9))
            ->add(Post::all())
            ->writeToFile(public_path('sitemap.xml'));
    }
}
