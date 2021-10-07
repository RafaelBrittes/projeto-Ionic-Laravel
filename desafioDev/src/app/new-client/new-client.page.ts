import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { asapScheduler, BehaviorSubject, Observable } from 'rxjs';
import { Clientes } from '../clientes/clientes.models';
import { ClientesService } from '../services/clientes.service';
import { addListener } from 'process';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
  refreshClients$ = new BehaviorSubject<boolean>(true);
  clientes$: Observable<Clientes[]>;

  clientsForm: FormGroup
  public clientID = this.clienteService.clientID;
  public clientela = this.clienteService.clientela;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private _location: Location, private clienteService: ClientesService) {

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

  onSubmit(buttonType) {
    if (buttonType === null) {
      let updateClient = this.clientsForm.value;

      this.http.post(`${this.mainUrl}/users/${this.clientID}`, updateClient).subscribe((res) => {
        this.clienteService.setNewClient(res);
      })
      this.backToClients();
    }

    if (buttonType !== null) {
      let newCliente = this.clientsForm.value;

      this.http.post(`${this.mainUrl}/users`, newCliente).subscribe((res) => {
        this.clienteService.setNewClient(res);
      })
      this.backToClients();
    }
  }

  backToClients() {
    this._location.back();
  }

  ngOnInit() {

    this.url = this.router.url;

    this.update()
  }

  public control(input: string) {
    return this.clientsForm.get(input);
  }

  update() {
    if (this.router.url == "/update") {
      let filtrado = this.clientela.find(id => id.id === this.clientID)
      this.clientsForm.patchValue({
        name: filtrado.name,
        cnpj: filtrado.cnpj,
        address: filtrado.address,
        city: filtrado.city,
        state: filtrado.state,
        phone: filtrado.phone,
      })
      // console.log(this.clienteService.clientela)
      // console.log(this.clientID)
    }
  }

}
