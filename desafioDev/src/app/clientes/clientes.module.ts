import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ClientesPage } from './clientes.page';

import { ClientesPageRoutingModule } from './clientes-routing.module';
import { ClientModalComponent } from '../client-modal/client-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule
  ],
  declarations: [ClientesPage, ClientModalComponent],
  entryComponents:[ClientModalComponent]
})
export class ClientesPageModule {}
