import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    OrderComponent,
    OrderListComponent,
    EmpListComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //OrderService,
    { provide: OrderService, useClass: OrderService },
    PostService,
    EmployeeServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
