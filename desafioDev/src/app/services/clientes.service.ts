import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable';
import { Clientes } from '../clientes/clientes.models';
import { NewClientPage } from '../new-client/new-client.page';

@Injectable({
    providedIn: 'root'
})

export class ClientesService {
    mainUrl = 'http://projeto-ionic.beta';

    constructor(private http: HttpClient) {}
    
    public clientela: any;
    public clientID: number;

    setNewClient(client){
        this.clientela.push(client);       
    }


    deleteOnArray(currentClientID){
        return this.clientela = this.clientela.filter(c => c.id !== currentClientID)
    }
    
    getCliente(){
        return new Promise<Clientes[]>((resolve) => {
            if(this.clientela){
                return resolve(this.clientela)
            }

            this.http.get<Clientes[]>(`${this.mainUrl}/users`).subscribe(res => {
                this.clientela = res;
                return resolve(res)
            })
        })
    }

    // getClients(): Observable<any>{
    //     return this.http.get(`${this.mainUrl}/users`);
    // }

    deleteClient(i): Observable<any>{
        return this.http.delete(`${this.mainUrl}/users/${i}`)
    }
}