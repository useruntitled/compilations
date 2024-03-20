<?php

namespace App\Traits;

use App\Models\Role;

trait Adminable
{
    public function toAdmin(): void
    {
        $this->roles()->attach(Role::where('name', Role::ADMIN)->firstOrFail()->id);
    }

    public function unAdmin(): void
    {
        $this->roles()->detach(Role::where('name', Role::ADMIN)->firstOrFail()->id);
    }
}
