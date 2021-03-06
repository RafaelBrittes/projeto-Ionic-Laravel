import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from './clientes.models';
import { BehaviorSubject } from 'rxjs';
import { OrdersService } from '../services/orders.service';
import { Orders } from '../orders/orders.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: 'clientes.page.html',
  styleUrls: ['clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes$: Clientes[];
  refreshClients$ = new BehaviorSubject<boolean>(true);
  i: number;
  currentClientID: number;
  mainUrl = 'http://projeto-ionic.beta';
  orders$: Orders[];

  constructor(private clienteService: ClientesService,
    public actionSheetCtrl: ActionSheetController,
    private router: Router,
    public alertController: AlertController,
    private ordersService: OrdersService,
    public http: HttpClient) { }
    public ordersList: any;


  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.clienteService.getCliente().then(res => {
      this.clientes$ = res
    })
  }

  async activateActionSheet(id, i) {
    this.currentClientID = id;
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Atualizar Cliente',
        handler: () => {
          this.router.navigate(['/update'])
          this.clienteService.clientID = this.currentClientID
        }
      }, {
        text: 'Excluir Cliente',
        role: 'destructive',
        handler: () => {
          this.presentAlertMultipleButtons();
        }
      }, {
        text: 'Novo Pedido',
        handler: () => {
          this.router.navigate(['/orders'])
          this.ordersService.clientID = this.currentClientID
          this.ordersService.indexID = i;
        }
      }],
      cssClass: 'custom-action',
      animated: true, // animação ao abrir
      backdropDismiss: true, //clicar fora vai fechar
      keyboardClose: true, // fechar o keyboard do mobile ao abrir
      mode: 'ios' // forçar usar modo ios
    });
    actionSheet.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'alert-css-class',
      header: 'Excluir cliente',
      subHeader: 'Tem certeza que deseja excluir o cliente?',
      buttons: [{
        text: 'Excluir',
        cssClass: 'secondary',
        handler: () => {
          this.clienteService.deleteClient(this.currentClientID).subscribe(() => {
            this.clientes$ = this.clienteService.deleteOnArray(this.currentClientID);
          });
        }
      }, {
        text: 'Cancelar',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }]
    });

    await alert.present();
  }

}

