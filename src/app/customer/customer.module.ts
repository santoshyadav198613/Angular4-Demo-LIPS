import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router'
import {AuthGuard} from '../service/guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'customer', component: CustomerComponent, canActivate:[AuthGuard] }
    ])
  ],
  declarations: [
    CustomerComponent
  ]
})
export class CustomerModule { }
