import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { CustomerComponent } from '../customer/customer.component';
import { EmployeeComponent } from '../employee/employee.component';
import { OrderComponent } from '../order/order.component';
import { PostComponent } from '../post/post.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      // { path: 'customer', component: CustomerComponent },
      // { path: 'employee', component: EmployeeComponent },
      // { path: 'order', component: OrderComponent },
      // { path: 'post', component: PostComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  // exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
