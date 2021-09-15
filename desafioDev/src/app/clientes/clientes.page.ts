import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-clientes',
  templateUrl: 'clientes.page.html',
  styleUrls: ['clientes.page.scss'],
})
export class ClientesPage {

  clientes = [
    {
      "nome": "Pablo",
      "CNPJ": 152223230,
      "totalFaturado": 1221
    },
    {
      "nome": "sdfsd",
      "CNPJ": 152323230,
      "totalFaturado": 12232
    },
    {
      "nome": "sdfsdf",
      "CNPJ": 123232350,
      "totalFaturado": 122
    }
  ]

  constructor(public actionSheetCtrl: ActionSheetController, private router: Router, public alertController: AlertController) { }
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
        }},{
        text: 'Cancelar',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }}]
    });

    await alert.present();
  }



}
