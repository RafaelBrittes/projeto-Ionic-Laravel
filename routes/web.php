<?php

/** @var \Laravel\Lumen\Routing\Router $router */


$router->group([
    'prefix' => "users"
], function () use ($router){
    $router->get('/',       'MainController@showUsers');
    $router->post('/',      'MainController@userCreate'); 
    $router->put("{id}",    'MainController@userUpdate');
    $router->get("{id}",    'MainController@showSpecificUser');
    $router->delete("{id}", 'MainController@delete');
});

$router->group([
    'prefix' => "order"
], function () use ($router){
    $router->get('/',        'OrderController@showOrders');
    $router->get('/{id}',    'OrderController@showOrdersByID');
    $router->post('/',       'OrderController@createOrder');    
    $router->delete('/{id}', 'OrderController@deleteOrder');
});