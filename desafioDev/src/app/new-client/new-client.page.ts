import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
 
clientsForm: FormGroup


  constructor( private router: Router, private formBuilder: FormBuilder) { 
    this.clientsForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      cnpj: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      city: this.formBuilder.control(''),
      state: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
    })
  }
  public url: string = "";

  
  public onSubmit() {
    console.log(this.clientsForm.value);
  }
  
  ngOnInit() {
    
    this.url = this.router.url;
  }
}