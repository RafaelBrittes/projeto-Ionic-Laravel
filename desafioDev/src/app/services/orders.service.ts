import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Orders } from '../orders/orders.models';


@Injectable({
    providedIn: 'root'
})

export class OrdersService {
    mainUrl = 'http://projeto-ionic.beta';

    constructor(private http: HttpClient) {}
    
    public clientela: any;
    public clientID: number;

    
    getCliente(){
        return new Promise<Orders[]>((resolve) => {
            if(this.clientela){
                return resolve(this.clientela)
            }

            this.http.get<Orders[]>(`${this.mainUrl}/users`).subscribe(res => {
                this.clientela = res;
                return resolve(res)
            })
        })
    }

}