<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $fillable = ['name'];

    public function product()
    {
        return $this->belongsToMany('App\Product',
        'product_categories', 'category_id', 'product_id');
    }
}
