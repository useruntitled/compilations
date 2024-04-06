<?php

namespace App\Console\Commands;

use App\Models\Post;
use App\Services\TelegramNotifier;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Spatie\Sitemap\Sitemap;
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
        try {
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

            TelegramNotifier::text('Sitemap:generate');
        } catch (\Exception $e) {
            TelegramNotifier::text('sitemap failed');
        }
    }
}
