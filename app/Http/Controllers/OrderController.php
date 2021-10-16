<?php

namespace App\Http\Controllers;

use App\Models\OrderModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{

    public function createOrder(Request $request){
        $order = new OrderModel();
        $order->item = $request->item;
        $order->value = $request->value;
        $order->user_id = $request->user_id;
        $order->save();
        return $request;
    }

    public function showOrders(){
        $orders = OrderModel::all();
        return Response([
            'Status'     => 'Sucesso',
            'Informacao' => $orders
        ]);
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