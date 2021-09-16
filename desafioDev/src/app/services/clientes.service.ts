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

    getClients(): Observable<Clientes[]>{
        return this.http.get<Clientes[]>(`${this.mainUrl}/prod`);
    }
}