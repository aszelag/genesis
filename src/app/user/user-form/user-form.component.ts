import { Component, Input, Output, OnInit, ViewChild, EventEmitter, HostListener } from '@angular/core';
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
export class UserFormComponent implements OnInit {
  displayedColumns: UserColumn[] = [UserColumn.PESEL, UserColumn.FIRST_NAME, UserColumn.LAST_NAME, UserColumn.STREET, UserColumn.HOUSE_NUMBER, UserColumn.APARTMRNT_NUMBER, UserColumn.ZIP_CODE, UserColumn.CITY];
  dataSource = new MatTableDataSource<User>([]);
  users: User[] = [];
  isDataLoaded: boolean = false;

  @Input() isPagination: boolean = true;
  @Input() dislayedColumnsSmall: UserColumn[] = this.displayedColumns;
  @Output() dataLoaded = new EventEmitter<boolean>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.userService.getUsers().subscribe(users => {
        if (this.isPagination) {
          this.dataSource = new MatTableDataSource<User>(users);
        } else {
          this.users = users;
          this.dataSource = new MatTableDataSource<User>(users.slice(0, 20));
        }
        this.isDataLoaded = true;
        this.dataLoaded.emit(true);
        this.dataSource.paginator = this.paginator;
      })
    }, 5000);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if ((document.body.clientHeight + window.scrollY + 200) >= document.body.scrollHeight && this.dataSource.filteredData.length < this.users.length) {
      this.dataSource = new MatTableDataSource<User>(this.users.slice(0, this.dataSource.filteredData.length + 20));
    }
  }
}


