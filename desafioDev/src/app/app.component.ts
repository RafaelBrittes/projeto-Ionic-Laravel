import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  clientsForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.clientsForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
    })
  }

  public onSubmit() {
    console.log(this.clientsForm.value);
  }

}
