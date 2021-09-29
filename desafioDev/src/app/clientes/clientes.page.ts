import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { Button } from 'protractor';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from './clientes.models';
@Component({
  selector: 'app-clientes',
  templateUrl: 'clientes.page.html',
  styleUrls: ['clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes$: Observable<Clientes[]>;


  constructor(private clientesService: ClientesService,
    public actionSheetCtrl: ActionSheetController,
    private router: Router,
    public alertController: AlertController) { }

    // ngOnInit() {
    //   this.clientesService.getClients().then(res =>{
    //     console.log(res + "asd")
    //     this.clientes$ = res;
    //   })
    // }

    ngOnInit() {
      this.clientesService.getClients().subscribe(res =>{
        this.clientes$ = res;
      })
    }

  async activateActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Atualizar Cliente',
        handler: () => {
          this.router.navigate(['/update'])
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
          this.router.navigate(['/new-order'])
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
          console.log('Confirm Cancel');
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

