<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'short_description',
        'image',
        'price',
        'category_id',
        'variations',
        'add_ons',
        'available_time_starts',
        'available_time_ends',
        'status'
    ];

    public function category() {
        return $this->belongsTo(Category::class);
    }

}