<?php

namespace App\Http\Controllers;

use App\Models\OrderModel;
use App\Models\UserModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{

    public function createOrder(Request $request){
        $order = new OrderModel();
        $user = UserModel::where('id', $request->user_id);
        $order->item = $request->item;
        $order->value = $request->value;
        $order->user_id = $request->user_id;
        $user->increment('total_value', $request->value);
        $order->save();

        return $request;
    }

    public function showOrders(){
        $orders = OrderModel::all();
        return $orders;
    }

    public function showOrdersByID($id){
        $orders = OrderModel::where('user_id', $id)->get();
        return $orders;
    }

    public function deleteOrder($id){
        $order = OrderModel::find($id);
        $order->delete();
        return Response([
            'Status'     => 'Sucesso',
            'Informacao' => "Pedido de ID {$id} excluído!"
        ]);
    }    
}