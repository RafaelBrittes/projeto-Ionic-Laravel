import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrMaskerModule } from 'br-mask';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, BrMaskerModule, ReactiveFormsModule],
  providers: [{ provide: [RouteReuseStrategy, LOCALE_ID], useClass: IonicRouteStrategy, useValue: 'BRL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
