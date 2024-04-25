<?php

namespace App\Models;

use App\Traits\HasAuthor;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Bookmark extends Model
{
    use HasAuthor;
    use HasFactory;

    protected $fillable = [
        'post_id', 'user_id',
    ];

    public function postRelation(): BelongsTo
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    protected function post(): Attribute
    {
        return Attribute::get(fn() => $this->postRelation);
    }
}
