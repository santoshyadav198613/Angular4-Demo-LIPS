import { EmployeePastExp } from './employeePastExp';
import { EmployeeAddress } from './employeeAddress';

export class Emp {
    empName: string;
    empDob: Date;
    empExp: number;
    empPan: number;
    empAdd: EmployeeAddress;
    empPastExp: EmployeePastExp[];
}