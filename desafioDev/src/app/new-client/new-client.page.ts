import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
 
clientsForm: FormGroup


  constructor( private router: Router, private formBuilder: FormBuilder) { 
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

  
  public onSubmit() {
    console.log(this.clientsForm.value);
  }
  
  ngOnInit() {
    
    this.url = this.router.url;
  }

  public control(input: string){
    return this.clientsForm.get(input);
  }
}