import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from '../orders/orders.models';


@Injectable({
    providedIn: 'root'
})

export class OrdersService {
    mainUrl = 'http://projeto-ionic.beta';

    constructor(private http: HttpClient) { }

    public ordersList: any;
    public clientID: number;


    getPedidos() {
        return new Promise<Orders[]>((resolve) => {
            if (this.ordersList) {
                return resolve(this.ordersList)
            }

            this.http.get<Orders[]>(`${this.mainUrl}/users`).subscribe(res => {
                this.ordersList = res;
                return resolve(res)
            })
        })
    }

    setNewOrder(order) {
        this.ordersList.push(order);
    }

}