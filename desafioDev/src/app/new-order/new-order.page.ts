import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { ClientesService } from '../services/clientes.service';
import { OrdersService } from '../services/orders.service';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {
  ordersForm: FormGroup
  public url: string = "";
  mainUrl = 'http://projeto-ionic.beta';
  public clientID = this.ordersService.clientID;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private _location: Location, private clienteService: ClientesService, private ordersService: OrdersService) {

    this.ordersForm = this.formBuilder.group({
      item: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
      value: this.formBuilder.control('', [Validators.required, Validators.minLength(1)]),
    })
   }

   public control(input: string) {
    return this.ordersForm.get(input);
  }

   onSubmit(){
    let newOrder = this.ordersForm.value;
    console.log(typeof newOrder.value)
    newOrder.value = newOrder.value.replace(/[,]/g, '')
    newOrder.value = parseFloat(newOrder.value);
    console.log(typeof newOrder.value)
    newOrder.user_id = this.clientID;

    // newOrder.value = parseFloat(newOrder.value).toFixed(2);
   
    this.http.post(`${this.mainUrl}/order`, newOrder).subscribe((res) => {
      this.ordersService.setNewOrder(res)
      this.ordersService.clientID = newOrder.user_id;
    })
    this.backToOrders();
  }

  backToOrders() {
    this._location.back();
    console.log("back1")
  }

  ngOnInit() {
  }

}
