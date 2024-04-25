<?php

namespace App\Traits;

use App\Enums\UserRole;
use App\Models\Role;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait Roleable
{
    public function rolesRelation(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    protected function roles(): Attribute
    {
        return Attribute::get(fn() => $this->rolesRelation);
    }

    protected function isUser(): Attribute
    {
        return Attribute::get(fn () => ! $this->isAdmin && ! $this->isModer);
    }

    protected function isAdmin(): Attribute
    {
            $this->roles ?? $this->rolesRelation();

        return Attribute::get(fn() => $this->rolesRelation->contains(fn($r) => $r->name == UserRole::ADMIN));
    }

    protected function isCreator(): Attribute
    {
            $this->roles ?? $this->rolesRelation();

        return Attribute::get(fn() => $this->rolesRelation->contains(fn($r) => $r->name == UserRole::CREATOR));
    }

    protected function isModer(): Attribute
    {
            $this->roles ?? $this->rolesRelation();

        return Attribute::get(fn() => $this->rolesRelation->contains(fn($r) => $r->name == UserRole::MODER));
    }

    public function toAdmin(): void
    {
        $this->rolesRelation()->attach(Role::whereName(UserRole::ADMIN)->firstOrFail()->id);
    }

    public function unAdmin(): void
    {
        $this->rolesRelation()->detach(Role::whereName(UserRole::ADMIN)->firstOrFail()->id);
    }

    public function toModer(): void
    {
        $this->rolesRelation()->attach(Role::whereName(UserRole::MODER)->firstOrFail()->id);
    }

    public function unModer(): void
    {
        $this->rolesRelation()->detach(Role::whereName(UserRole::MODER)->firstOrFail()->id);
    }

    public function scopeHasAdminRole(Builder $query): Builder
    {
        return $query->whereHas('rolesRelation', function (Builder $query) {
            $query->where('name', UserRole::ADMIN);
        });
    }

    public function scopeOnlyUserRole(Builder $builder): void
    {
        $builder->whereHas('rolesRelation', function (Builder $builder) {
            $builder->whereNot('name', UserRole::ADMIN)->whereNot('name', UserRole::MODER);
        });
    }

    public function scopeHasModerRole(Builder $query): Builder
    {
        return $query->whereHas('rolesRelation', function (Builder $query) {
            $query->where('name', UserRole::MODER);
        });
    }
}
