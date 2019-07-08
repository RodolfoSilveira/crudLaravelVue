<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'produtos';

    protected $fillable = ['name', 'description', 'value', 'image'];

    public function categories()
    {
        return $this->belongsToMany('App\Category', 'product_categories',
        'product_id', 'category_id');
    }
}
