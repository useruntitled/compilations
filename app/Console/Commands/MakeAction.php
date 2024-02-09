<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class MakeAction extends Command
{
    protected $signature = 'make:action {name}';

    protected $description = 'Create a new action class in app/Actions folder';

    public function handle()
    {
        $name = $this->argument('name');
        $className = ucfirst($name);

        $filePath = app_path('Actions/'.$className.'.php');
        if (File::exists($filePath)) {
            $this->error('The action class already exists!');

            return;
        }

        File::put($filePath, $this->generateClassTemplate($className));
        $this->info('Action class created successfully!');
    }

    protected function generateClassTemplate($className)
    {
        return <<<EOT
<?php

namespace App\Actions;

class $className
{
    public function handle()
    {
        //
    }
}
EOT;
    }
}
