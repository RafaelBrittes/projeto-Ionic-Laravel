import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { NewClientPageRoutingModule } from './new-client-routing.module';

import { NewClientPage } from './new-client.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewClientPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [NewClientPage]
})
export class NewClientPageModule {}
