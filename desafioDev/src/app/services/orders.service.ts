import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from '../orders/orders.models';
import { ClientesService } from './clientes.service';


@Injectable({
    providedIn: 'root'
})

export class OrdersService {
    mainUrl = 'http://projeto-ionic.beta';

    constructor(
        private http: HttpClient,
        private clienteService: ClientesService) { }

    public ordersList: any;
    public clientID: number;
    public indexID: number;


    getPedidos() {
        return new Promise<Orders[]>((resolve) => {
            
            this.http.get<Orders[]>(`${this.mainUrl}/order/${this.clientID}`).subscribe(res => {
                this.ordersList = res;
                return resolve(res)
            })
        })
    }

    getAllPedidos() {
        return new Promise<Orders[]>((resolve) => {
            
            this.http.get<Orders[]>(`${this.mainUrl}/order`).subscribe(res => {
                this.ordersList = res;
                return resolve(res)
            })
        })
    }

    setNewOrder(order) {
        this.ordersList.push(order);
        this.clienteService.clientela[this.indexID].total_value += parseFloat(order.value);
        console.log(order);
  
    }

}