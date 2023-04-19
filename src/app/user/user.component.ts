import { Component } from '@angular/core';
import { UserColumn } from './models/user-column';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  isPagination: boolean = true;
  dislayedColumnsSmall: UserColumn[] = [UserColumn.PESEL, UserColumn.FIRST_NAME, UserColumn.LAST_NAME, UserColumn.CITY];
}
