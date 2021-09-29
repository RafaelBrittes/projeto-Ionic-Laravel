<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class UserModel extends Model
{
    protected $table = 'users';
    protected $fillable = [
        'name',
        'cnpj',
        'address',
        'city',
        'state',
        'phone'
    ];

    public $timestamps = false;

}
