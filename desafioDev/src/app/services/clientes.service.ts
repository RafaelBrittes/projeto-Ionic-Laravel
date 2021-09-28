import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable';
import { Clientes } from '../clientes/clientes.models';

@Injectable({
    providedIn: 'root'
})

export class ClientesService {
    mainUrl = 'http://projeto-ionic.beta';

    constructor(private http: HttpClient) {}

    // getClients(): Promise<any>{
    //     return new Promise((resolve, reject) => {
    //         this.http.get(`${this.mainUrl}/users`).subscribe(res =>{
    //             console.log(res);
    //             resolve(res)
    //         });    
    //     })
    // }

    getClients(): Observable<any>{
        return this.http.get(`${this.mainUrl}/users`);
    }

    newClient(data): Observable<any>{
        return this.http.post(`${this.mainUrl}/users`, data)

    }

}