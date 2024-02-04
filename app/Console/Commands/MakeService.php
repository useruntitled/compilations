<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeService extends Command
{
    protected $signature = 'make:service {name}';

    protected $description = 'Create a new service class in app/Services folder';

    public function handle()
    {
        $name = $this->argument('name');
        $className = ucfirst($name);

        $filePath = app_path('Services/'.$className.'.php');
        if (File::exists($filePath)) {
            $this->error('The service class already exists!');

            return;
        }

        File::put($filePath, $this->generateClassTemplate($className));
        $this->info('Service class created successfully!');
    }

    protected function generateClassTemplate($className)
    {
        return <<<EOT
<?php

namespace App\Services;

class $className
{
    public function __construct()
    {
        //
    }
}
EOT;
    }
}
