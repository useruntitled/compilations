<?php

namespace App\Traits;

use App\Models\Role;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;

trait Roleable
{
    protected function isUser(): Attribute
    {
        return Attribute::get(fn () => ! $this->isAdmin && ! $this->isModer);
    }

    protected function isAdmin(): Attribute
    {
        $this->roles ?? $this->roles();

        return Attribute::get(fn () => $this->roles->contains(fn ($r) => $r->name == Role::ADMIN));
    }

    protected function isCreator(): Attribute
    {
        $this->roles ?? $this->roles();

        return Attribute::get(fn () => $this->roles->contains(fn ($r) => $r->name == Role::CREATOR));
    }

    protected function isModer(): Attribute
    {
        $this->roles ?? $this->roles();

        return Attribute::get(fn () => $this->roles->contains(fn ($r) => $r->name == Role::MODER));
    }

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

    public function scopeUser(Builder $builder): void
    {
        $builder->whereHas('roles', function (Builder $builder) {
            $builder->whereNot('name', Role::ADMIN)->whereNot('name', Role::MODER);
        });
    }

    public function scopeModer(Builder $query): Builder
    {
        return $query->whereHas('roles', function (Builder $query) {
            $query->where('name', Role::MODER);
        });
    }
}
