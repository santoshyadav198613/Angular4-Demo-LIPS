
import { HttpApiinterceptorService } from './interceptor/http-apiinterceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { PostModule } from './post/post.module';
import { CustomerModule } from './customer/customer.module';
import { SharedModule } from './shared/shared.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderModule } from './order/order.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { CustomerComponent } from './customer/customer.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { OrderComponent } from './order/order.component';
// import { OrderListComponent } from './order/order-list/order-list.component';
// import { EmpListComponent } from './employee/emp-list/emp-list.component';
// import { PostComponent } from './post/post.component';
// import { PostListComponent } from './post/post-list/post-list.component';
// import { PostService } from './service/post/post.service';

// import { EmployeeServiceService } from './service/employeeService/employee-service.service';
import { OrderService } from './service/order/order.service';
import {LoginService} from './service/login/login.service';
import {AuthGuard} from './service/guard/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    // CustomerComponent,
    // EmployeeComponent,
    // OrderComponent,
    // OrderListComponent,
    // EmpListComponent,
    // PostComponent,
    // PostListComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    // PostModule,
    CustomerModule,
    EmployeeModule,
    OrderModule,
    RoutingModule,
    BrowserAnimationsModule

  ],
  providers: [
    // OrderService,
    // { provide: OrderService, useClass: OrderService },
    // PostService,
    // EmployeeServiceService,
    LoginService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpApiinterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
