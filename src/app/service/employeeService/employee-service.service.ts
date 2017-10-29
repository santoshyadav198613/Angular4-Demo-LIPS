import { Emp } from './employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeServiceService {

  employee = new Array<Emp>();

  constructor() { }

  getEmployee(): Emp []{
    return this.employee=[
      {empName:'emp1',empDob:new Date('Jan-23-1997'),empExp:23,empPan:786298478346,
      empAdd: {addressLine1:'pune',addressLine2:'pune',city:'pune',state:'MH' },
      empPastExp:[{organisation:'TCS',startDate:new Date('aug-4-2000'),endDate:new Date('jan-7-2008'),designation:'Software Developer'}]},

      {empName:'emp2',empDob:new Date('Jan-23-1997'),empExp:23,empPan:786298478346,
      empAdd: {addressLine1:'pune',addressLine2:'pune',city:'pune',state:'MH' },
      empPastExp:[{organisation:'TCS',startDate:new Date('aug-4-2000'),endDate:new Date('jan-7-2008'),designation:'Software Developer'}]},

      {empName:'emp3',empDob:new Date('Jan-23-1997'),empExp:23,empPan:786298478346,
      empAdd: {addressLine1:'pune',addressLine2:'pune',city:'pune',state:'MH' },
      empPastExp:[{organisation:'TCS',startDate:new Date('aug-4-2000'),endDate:new Date('jan-7-2008'),designation:'Software Developer'}]},

      {empName:'emp4',empDob:new Date('Jan-23-1997'),empExp:23,empPan:786298478346,
      empAdd: {addressLine1:'pune',addressLine2:'pune',city:'pune',state:'MH' },
      empPastExp:[{organisation:'TCS',startDate:new Date('aug-4-2000'),endDate:new Date('jan-7-2008'),designation:'Software Developer'}]}
    ]

  }

  addEmployee(emp:Emp){
    this.employee.push(emp)
  }

}
