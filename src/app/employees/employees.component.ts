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



editEmployee(id: number) {
  this.employeeService.updateEmployee(id, this.selectedEmployee).subscribe(() => {
    console.log("Employee updated successfully!");
  }, error => {
    console.log(error);
  });
}

deleteEmployee(id: number) {
  this.employeeService.deleteEmployee(id).subscribe(() => {
    console.log("Employee deleted successfully!");
  }, error => {
    console.log(error);
  });
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
