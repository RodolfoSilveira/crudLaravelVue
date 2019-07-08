<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namescape' => 'API'], function () {

    //Route users
    Route::post('/login', 'AuthController@login')->name('auth.login');
    Route::post('/logout', 'AuthController@logout');
    Route::post('/register', 'AuthController@register');

    //Routes listeners
    Route::post('/loginListener', 'ListenerController@login');
    Route::post('/logoutListener', 'ListenerController@logout');
    Route::post('/registerListener', 'ListenerController@register');

    Route::group(['middleware' => ['jwt.auth']], function () {

        //Routes product
        Route::resource('product', 'ProductController');
        Route::get('product/search/{product}', 'ProductController@search');
        Route::get('product/specific/procurase', 'ProductController@specific');
    });
});
