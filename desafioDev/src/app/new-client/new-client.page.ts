import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import{ Location } from '@angular/common';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
 
clientsForm: FormGroup


  constructor( private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private _location: Location) { 
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
    var formData: any = new FormData();
    formData.append("name", this.clientsForm.get('name').value);
    formData.append("cnpj", this.clientsForm.get('cnpj').value);
    formData.append("address", this.clientsForm.get('address').value);
    formData.append("city", this.clientsForm.get('city').value);
    formData.append("state", this.clientsForm.get('state').value);
    formData.append("phone", this.clientsForm.get('phone').value);

  
    this.http.post(`${this.mainUrl}/users`, formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.backToClients();
  }

  backToClients() {
    this._location.back();
  }
  
  ngOnInit() {
    
    this.url = this.router.url;
  }

  public control(input: string){
    return this.clientsForm.get(input);
  }
}