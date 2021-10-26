import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewOrderPageRoutingModule } from './new-order-routing.module';
import { NewOrderPage } from './new-order.page';
import { BrMaskerModule } from 'br-mask';
import{ ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewOrderPageRoutingModule,
    BrMaskerModule,
    ReactiveFormsModule
    ],
  declarations: [NewOrderPage]
})
export class NewOrderPageModule {}
