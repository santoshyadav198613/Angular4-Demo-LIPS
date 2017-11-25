import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from '../order/order.component';
import { OrderListComponent } from '../order/order-list/order-list.component';
import { OrderService } from '../service/order/order.service';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AuthGuard } from '../service/guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'order',
        component: OrderComponent, canActivate: [AuthGuard],canActivateChild:[AuthGuard],
        children: [
          { path: ':id', component: OrderDetailsComponent }
        ]
      }
    ])
  ],
  declarations: [
    OrderComponent,
    OrderListComponent,
    OrderDetailsComponent,
  ],
  providers: [
    { provide: OrderService, useClass: OrderService },
  ]
})
export class OrderModule { }
