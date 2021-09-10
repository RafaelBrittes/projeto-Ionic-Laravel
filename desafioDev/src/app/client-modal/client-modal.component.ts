import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.scss'],
})
export class ClientModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
    ) {   }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

}
