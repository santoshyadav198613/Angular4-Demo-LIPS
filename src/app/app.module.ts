
import { HttpApiinterceptorService } from './interceptor/http-apiinterceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { EmpListComponent } from './employee/emp-list/emp-list.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostService } from './service/post/post.service';

import { EmployeeServiceService } from './service/employeeService/employee-service.service';
import { OrderService } from './service/order/order.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    OrderComponent,
    OrderListComponent,
    EmpListComponent,
    PostComponent,
    PostListComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'customer', component: CustomerComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'order', component: OrderComponent },
      { path: 'post', component: PostComponent },
      { path: '', redirectTo: 'post', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  providers: [
    // OrderService,
    { provide: OrderService, useClass: OrderService },
    PostService,
    EmployeeServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpApiinterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
