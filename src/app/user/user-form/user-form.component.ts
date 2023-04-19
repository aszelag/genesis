import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { UserColumn } from '../models/user-column';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements AfterViewInit, OnInit {
  displayedColumns: UserColumn[] = [UserColumn.PESEL, UserColumn.FIRST_NAME, UserColumn.LAST_NAME, UserColumn.STREET, UserColumn.HOUSE_NUMBER, UserColumn.APARTMRNT_NUMBER, UserColumn.ZIP_CODE, UserColumn.CITY];
  dataSource = new MatTableDataSource<User>([]);

  @Input() isPagination: boolean = true;
  @Input() dislayedColumnsSmall: UserColumn[] = this.displayedColumns;

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


