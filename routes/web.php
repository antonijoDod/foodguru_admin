<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AttributeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/products', [ProductController::class, 'index'] )
    ->middleware(['auth', 'verified'])
    ->name('products');

Route::get('/products/create', [ProductController::class, 'create'])
    ->middleware(['auth', 'verified'])
    ->name('products.create');

Route::post('/products/create', [ProductController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('products.store');
    
Route::delete('/products/{product}', [ProductController::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('products.destroy');

Route::prefix('categories')->group(function () {
    Route::middleware(['auth'])->group(function () {
        Route::get('/', [CategoryController::class, 'index'])->name('categories');
        Route::get('/create', [CategoryController::class, 'create'])->name('categories.create');
        Route::post('/create', [CategoryController::class, 'store'])->name('categories.store');
    });
});

Route::prefix('attributes')->group(function () {
    Route::middleware(['auth'])->group(function () {
        Route::get('/', [AttributeController::class, 'index'])->name('attributes');
        Route::get('/create', [AttributeController::class, 'create'])->name('attributes.create');
        Route::post('/create', [AttributeController::class, 'store'])->name('attributes.store');
        Route::delete('/{attribute}', [AttributeController::class, 'destroy'])->name('attributes.destroy');
    });
});
    
require __DIR__.'/auth.php';
