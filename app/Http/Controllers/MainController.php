<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MainController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function userCreate(Request $request)
    {
        $user = new UserModel();
        $user->name = $request->name;
        $user->cnpj = $request->cnpj;
        $user->address = $request->address;
        $user->city = $request->city;
        $user->state = $request->state;
        $user->phone = $request->phone;
        $user->total_value = 0;
        $user->save();
        return $user;
    }

    public function delete($id){
        return UserModel::find($id)->delete();
    }

    public function showUsers(){
        $users = UserModel::all();
        return $users;
    }

    public function showSpecificUser($id){
        $users = UserModel::find($id);
        return $users;
    }

    public function userUpdate(Request $request, $id){
        $users = UserModel::find($id);
        $users->name = $request->name;
        $users->cnpj = $request->cnpj;
        $users->address = $request->address;
        $users->city = $request->city;
        $users->state = $request->state;
        $users->phone = $request->phone;
        $users->save();
        return $users;
    }
    
}