import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service'; 
import { EmployeeDTO } from './employee.dto';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  selectedEmployee: EmployeeDTO = new EmployeeDTO;


//   viewEmployee(arg0: number) {

// throw new Error('Method not implemented.');
// }

viewEmployee(id: number) {
  this.employeeService.getEmployeeById(id).subscribe(employee => {
    this.selectedEmployee = employee;
  });
}



editEmployee(arg0: number) {
throw new Error('Method not implemented.');
}
deleteEmployee(arg0: number) {
throw new Error('Method not implemented.');
}
  employees: EmployeeDTO[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(
      (      data: EmployeeDTO[]) => {
        this.employees = data;
      },
      (      error: any) => {
        console.log(error);
      });
  }
}
