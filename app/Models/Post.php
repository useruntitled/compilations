<?php

namespace App\Models;

use App\Models\Scopes\PublishedScope;
use App\Traits\Declineable;
use App\Traits\HasAuthor;
use App\Traits\HasBookmarks;
use App\Traits\HasComments;
use App\Traits\HasFilms;
use App\Traits\HasImage;
use App\Traits\HasReputation;
use App\Traits\Reportable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Spatie\Sitemap\Contracts\Sitemapable;
use Spatie\Sitemap\Tags\Url;

class Post extends Model implements Sitemapable
{
    use Declineable;
    use HasAuthor;
    use HasBookmarks;
    use HasComments;
    use HasFactory;
    use HasFilms;
    use HasImage;
    use HasReputation;
    use Reportable;
    use SoftDeletes;

    protected static function booted(): void
    {
        static::addGlobalScope(new PublishedScope);
    }

    public function toSitemapTag(): Url
    {
        return Url::create(route('post', [$this->id, $this->slug]))
            ->setLastModificationDate(Carbon::create($this->updated_at))
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_HOURLY)
            ->setPriority(0.8);
    }

    protected $fillable = [
        'user_id', 'title',
        'description',
        'slug',
        'views', 'visits',
    ];

    protected $appends = [
        'timestamp',
        'has_bookmark', 'is_active',
        'reputation',
    ];

    protected $with = [
        'userRelation',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    public function scopeDrafted(Builder $builder): void
    {
        $builder->withoutGlobalScope(PublishedScope::class)
            ->whereNull('published_at')
            ->whereNull('declined_at');
    }

    public function scopeMayBeUnpublished(Builder $builder): void
    {
        $builder->withoutGlobalScope(PublishedScope::class);
    }

    public function scopePublished(Builder $builder): void
    {
        $builder->whereNotNull('published_at')->whereNull('declined_at');
    }

    public function scopeDeclined(Builder $builder): void
    {
        $builder->whereNotNull('declined_at');
    }

    protected function timestamp(): Attribute
    {
        return Attribute::get(fn () => $this->published_at?->diffForHumans());
    }

    protected function isActive(): Attribute
    {
        return Attribute::get(fn () => $this->published_at != null && $this->declined_at == null);
    }
}
