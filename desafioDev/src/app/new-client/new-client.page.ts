import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{ Location } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Clientes } from '../clientes/clientes.models';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
refreshClients$ = new BehaviorSubject<boolean>(true);
clientes$: Observable<Clientes[]>;

clientsForm: FormGroup


  constructor( private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private _location: Location, private clienteService: ClientesService) { 

    this.clientsForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      cnpj: this.formBuilder.control('', [Validators.required, Validators.minLength(18)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
      city: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      state: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      phone: this.formBuilder.control('', [Validators.required, Validators.minLength(14)]),
    })
  }
  public url: string = "";
  mainUrl = 'http://projeto-ionic.beta';
  
  // public onSubmit() Observable<any> {
  //   // console.log(this.clientsForm.value);
  //   return this.http.post(`${this.mainUrl}/users`, data)
  // }
  
  onSubmit() {   
    let newCliente = this.clientsForm.value;

    this.http.post(`${this.mainUrl}/users`, newCliente).subscribe((res) => {     
      this.clienteService.setNewClient(res);
    })
    this.backToClients();

  }

  backToClients() {
    this._location.back();
  }
  
  ngOnInit() {
    
    this.url = this.router.url;
    
  this.update()    
  }

  public control(input: string){
    return this.clientsForm.get(input);
  }

  update(){
    console.log(this.clienteService.clientID)
  }

}