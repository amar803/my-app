import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDTO } from './employee.dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8082/employees';

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get<EmployeeDTO[]>(this.baseUrl);
  }

  getEmployeeById(id: number) {
    return this.http.get<EmployeeDTO>(this.baseUrl + '/' + id);
  }

  createEmployee(employee: EmployeeDTO) {
    return this.http.post(this.baseUrl, employee);
  }

  updateEmployee(id: number, value: any) {
    return this.http.put(this.baseUrl + '/' + id, value);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
