import { Emp } from '../../service/employeeService/employee';
import { EmployeeServiceService } from '../../service/employeeService/employee-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

 
empList:any[];
  constructor( private emp:EmployeeServiceService) { }

  ngOnInit() {
   this.empList=this.emp.getEmployee();
  }

}
