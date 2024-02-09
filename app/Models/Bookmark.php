<?php

namespace App\Models;

use App\Traits\HasAuthor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    use HasAuthor;
    use HasFactory;

    protected $fillable = [
        'post_id', 'user_id',
    ];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
