import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { CreateOrderComponent } from 'src/app/create-order/create-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent, data: {animation: 'HomePage'} },
  { path: 'createOrder', component: CreateOrderComponent, data: {animation: 'AboutPage'} },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
