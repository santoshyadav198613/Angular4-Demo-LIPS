import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from '../order/order.component';
import { OrderListComponent } from '../order/order-list/order-list.component';
import { OrderService } from '../service/order/order.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    OrderComponent,
    OrderListComponent,
  ],
  providers:[
    { provide: OrderService, useClass: OrderService },
  ]
})
export class OrderModule { }
