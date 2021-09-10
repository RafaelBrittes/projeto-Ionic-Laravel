import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientModalComponent } from '../client-modal/client-modal.component';

@Component({
  selector: 'app-clientes',
  templateUrl: 'clientes.page.html',
  styleUrls: ['clientes.page.scss'],
})
export class ClientesPage {

  constructor(
    private modalCtrl: ModalController
  ) {}

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: ClientModalComponent
      
    });
    modal.present();
  }  

}
