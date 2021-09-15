import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

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

  constructor(public actionSheetCtrl: ActionSheetController, private router: Router) { }
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
          console.log('deleete');
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


}
