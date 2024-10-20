import { Component, OnInit, inject } from '@angular/core';
import { EmployeeService } from "../service/employee.service";
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent implements OnInit {
  employees$!: any;  // Observable to hold employee data

  private employeeService: EmployeeService = inject(EmployeeService);

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees()
  }
}
