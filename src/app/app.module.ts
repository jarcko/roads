import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    CreateOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_47QEBX6GWe101lgg5tCcS2yJra_IXQU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
