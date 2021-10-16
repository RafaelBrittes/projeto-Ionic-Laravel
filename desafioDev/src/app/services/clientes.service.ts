import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable';
import { Clientes } from '../clientes/clientes.models';

@Injectable({
    providedIn: 'root'
})

export class ClientesService {
    mainUrl = 'http://projeto-ionic.beta';

    constructor(private http: HttpClient) { }

    public clientela: any;
    public clientID: number;

    setNewClient(client) {
        this.clientela.push(client);
    }

    updateClient(client) {
        var index = this.clientela.findIndex(id => id.id === this.clientID)
        this.clientela[index] = client
    }


    deleteOnArray(currentClientID) {
        return this.clientela = this.clientela.filter(c => c.id !== currentClientID)
    }

    getCliente() {
        return new Promise<Clientes[]>((resolve) => {
            if (this.clientela) {
                return resolve(this.clientela)
            }

            this.http.get<Clientes[]>(`${this.mainUrl}/users`).subscribe(res => {
                this.clientela = res;
                return resolve(res)
            })
        })
    }

    deleteClient(i): Observable<any> {
        return this.http.delete(`${this.mainUrl}/users/${i}`)
    }
}