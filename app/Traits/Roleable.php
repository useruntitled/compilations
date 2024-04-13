<?php

namespace App\Traits;

use App\Enums\UserRole;
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

        return Attribute::get(fn () => $this->roles->contains(fn ($r) => $r->name == UserRole::ADMIN));
    }

    protected function isCreator(): Attribute
    {
        $this->roles ?? $this->roles();

        return Attribute::get(fn () => $this->roles->contains(fn ($r) => $r->name == UserRole::CREATOR));
    }

    protected function isModer(): Attribute
    {
        $this->roles ?? $this->roles();

        return Attribute::get(fn () => $this->roles->contains(fn ($r) => $r->name == UserRole::MODER));
    }

    public function toAdmin(): void
    {
        $this->roles()->attach(Role::whereName(UserRole::ADMIN)->firstOrFail()->id);
    }

    public function unAdmin(): void
    {
        $this->roles()->detach(Role::whereName(UserRole::ADMIN)->firstOrFail()->id);
    }

    public function toModer(): void
    {
        $this->roles()->attach(Role::whereName(UserRole::MODER)->firstOrFail()->id);
    }

    public function unModer(): void
    {
        $this->roles()->detach(Role::whereName(UserRole::MODER)->firstOrFail()->id);
    }

    public function scopeAdmin(Builder $query): Builder
    {
        return $query->whereHas('roles', function (Builder $query) {
            $query->where('name', UserRole::ADMIN);
        });
    }

    public function scopeUser(Builder $builder): void
    {
        $builder->whereHas('roles', function (Builder $builder) {
            $builder->whereNot('name', UserRole::ADMIN)->whereNot('name', UserRole::MODER);
        });
    }

    public function scopeModer(Builder $query): Builder
    {
        return $query->whereHas('roles', function (Builder $query) {
            $query->where('name', UserRole::MODER);
        });
    }
}
