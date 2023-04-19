import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['pesel', 'firstName', 'lastName', 'street', 'houseNumber', 'apartmentNumber', 'zipCode', 'city'];
  dataSource = new MatTableDataSource<User>([]);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource<User>(users);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


