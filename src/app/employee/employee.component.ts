import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Employee } from '../service/employee/employee';
import{EmployeeServiceService} from '../service/employeeService/employee-service.service'

@Component({
  selector: 'app-emplyee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  @Input() empList: any[];
  @Input() title: string;
  hidden: boolean;
  @Output() isVisibleEvent = new EventEmitter<boolean>();

  employeeForm:FormGroup;
  maxExpReached:boolean=true;

  constructor(private fb: FormBuilder,private empService:EmployeeServiceService) { }

  ngOnInit() {
    this.employeeForm=this.fb.group({
      empName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      dob: new FormControl('', [Validators.required]),
      Exp: new FormControl('', [Validators.required]),
      pan: new FormControl('', [Validators.required]),
      address: this.fb.group({
        addressLine1: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
        addressLine2: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required])
      }),
      pastExp: this.fb.array([this.buildPastExp()])
    })
  }

  hidediv() {
    this.hidden = !this.hidden;
    this.isVisibleEvent.emit(this.hidden);
  }

  addEmployee() {
    // console.log(this.employee);
    // this.employee = new Employee();
    this.empService.addEmployee(this.employeeForm.value);
  }

  buildPastExp(){
    return this.fb.group({
      organisation: new FormControl('', [Validators.required,]),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required])
    })
  }

  addExp(){
    const exp=this.employeeForm.controls['pastExp'] as FormArray;
    if (exp.length<3){
      this.maxExpReached=false;
    }
    exp.push(this.buildPastExp());
  }

  removeExp(i: number){
    const cards = this.employeeForm.controls['pastExp'] as FormArray;
    cards.removeAt(i);
  }


}

