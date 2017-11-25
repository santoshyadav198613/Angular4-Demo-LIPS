import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { EmpListComponent } from '../employee/emp-list/emp-list.component';
import { EmployeeServiceService } from '../service/employeeService/employee-service.service';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../service/guard/auth.guard';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'employee', component: EmployeeComponent,canActivate:[AuthGuard] }
    ])
    
  ],
  declarations: [
    EmployeeComponent,
    EmpListComponent
  ],
  providers:[
    EmployeeServiceService
  ]
})
export class EmployeeModule { }
