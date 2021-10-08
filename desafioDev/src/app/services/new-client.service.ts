import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})

export class NewClientService {
    mainUrl = 'http://projeto-ionic.beta';

    constructor(private http: HttpClient) { }

    newClient(data): Observable<any> {
        return this.http.post(`${this.mainUrl}/users`, data)
    }
}