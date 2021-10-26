import { Component, OnInit } from '@angular/core';
import { Orders } from './orders.models';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders$: Orders[];

  constructor(private ordersService: OrdersService) { }

  ionViewWillEnter() { // sempre que puxar a page irá rodar
    this.ordersService.getPedidos().then(res => {
      this.orders$ = res
    })
  }

  ngOnInit() {
    console.log(this.ordersService.clientID)
  }

}
