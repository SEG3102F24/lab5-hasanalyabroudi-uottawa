import { Injectable } from '@angular/core';
import { Firestore, collectionData, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';  // Import the map operator to transform the data
import { Employee } from '../model/employee';
import { Timestamp } from 'firebase/firestore';  // Import Timestamp to handle Firestore dates

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeCollection = collection(this.firestore, 'employees');

  constructor(private firestore: Firestore) {}

  // Method to add an employee to Firestore
  addEmployee(employee: Employee): Promise<void> {
    return addDoc(this.employeeCollection, { ...employee })
      .then(() => {
        console.log('Employee added successfully');
      })
      .catch((error) => {
        console.error('Error adding employee: ', error);
        throw error; // Re-throw the error to be handled in the component
      });
  }

  // Method to fetch all employees from Firestore and convert Firestore Timestamp to Date
  getEmployees(): Observable<Employee[]> {
    return collectionData(this.employeeCollection, { idField: 'id' }).pipe(
      map(employees => employees.map(employee => ({
        ...employee,
        dateOfBirth: (employee['dateOfBirth'] instanceof Timestamp) 
          ? (employee['dateOfBirth'] as Timestamp).toDate()  // Convert Firestore Timestamp to JS Date
          : employee['dateOfBirth']  // Keep it as is if it's already a Date
      })))
    ) as Observable<Employee[]>;
  }
}
