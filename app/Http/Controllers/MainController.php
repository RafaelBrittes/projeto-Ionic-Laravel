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
        $user->CNPJ = $request->cnpj;
        $user->adress = $request->address;
        $user->city = $request->city;
        $user->state = $request->state;
        $user->phone = $request->phone;
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
        $users->email = $request->email;
        $users->CNPJ = $request->CNPJ;
        $users->adress = $request->adress;
        $users->city = $request->city;
        $users->state = $request->state;
        $users->phone = $request->phone;
        $users->save();

        return Response([
            'Status'     => 'Successo',
            'Resultado'  => 'OK',
            'Informacao' => 'Dados alterados com sucesso!'
        ]);

    }
    
}