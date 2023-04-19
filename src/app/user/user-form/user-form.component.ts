import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements AfterViewInit {
  displayedColumns: string[] = ['pesel', 'firstName', 'lastName', 'street', 'houseNumber', 'apartmentNumber', 'zipCode', 'city'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface User {
  pesel: string;
  firstName: string;
  lastName: string;
  street: string;
  houseNumber: number;
  apartmentNumber: number;
  zipCode: string;
  city: string;
}

const ELEMENT_DATA: User[] = [
  { pesel: "91091605007", firstName: 'Anna', lastName: "Kowalska", street: "Malinowa", houseNumber: 10, apartmentNumber: 20, zipCode: "09-200", city: "Warszawa" },
];
