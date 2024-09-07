<?php

use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

 

Route::get('/', function () {
    return view('welcome');
});


 
Route::get('/login-google', function () {
    return Socialite::driver('google')->redirect();
});
 
Route::get('/google-callback', function () {
    $user = Socialite::driver('google')->user();
    
    if($user != ''){
        return view('Sesion');

    }
    
    // $user->token
});

/*Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});*/
