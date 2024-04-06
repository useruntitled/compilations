<?php

namespace App\Traits;

use App\Models\Role;
use Illuminate\Database\Eloquent\Builder;

trait Roleable
{
    public function toAdmin(): void
    {
        $this->roles()->attach(Role::where('name', Role::ADMIN)->firstOrFail()->id);
    }

    public function unAdmin(): void
    {
        $this->roles()->detach(Role::where('name', Role::ADMIN)->firstOrFail()->id);
    }

    public function toModer(): void
    {
        $this->roles()->attach(Role::where('name', Role::MODER)->firstOrFail()->id);
    }

    public function unModer(): void
    {
        $this->roles()->detach(Role::where('name', Role::MODER)->firstOrFail()->id);
    }

    public function scopeAdmin(Builder $query): Builder
    {
        return $query->whereHas('roles', function (Builder $query) {
            $query->where('name', Role::ADMIN);
        });
    }

    public function scopeModer(Builder $query): Builder
    {
        return $query->whereHas('roles', function (Builder $query) {
            $query->where('name', Role::MODER);
        });
    }
}
