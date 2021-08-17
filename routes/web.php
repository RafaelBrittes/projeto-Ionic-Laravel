<?php

/** @var \Laravel\Lumen\Routing\Router $router */


$router->group(['prefix' => "/users"], function () use ($router){
    $router->get('/',       'MainController@showUsers');
    $router->get("/{id}",   'MainController@showSpecificUser');
    $router->post('/',      'MainController@userCreate'); 
    $router->put("/{id}",   'MainController@userUpdate');
    $router->delete("/{id}",'MainController@userDelete');
});

$router->group(['prefix' => "/order"], function ()use ($router){
    $router->get('/{id}', 'MainController@showOrders');
    $router->post('/{id}', 'MainController@createOrder');
    $router->delete('/{id}', 'MainController@deleteOrder');
});