import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { USER_TOKEN_CONST_NAME } from 'src/app/core/services/auth.service';
import { logoutUser, updateUser } from 'src/app/redux/actions/card.actions';
import { selectUser, selectUserFullName } from 'src/app/redux/selectors/selectors';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.scss'],
})
export class UserToolsComponent {
  isOpen = false;

  fullName$ = this.store.select(selectUserFullName);

  isLogged$ = false;

  constructor(public dialog: MatDialog, private store: Store) {
    this.store.dispatch(updateUser());
    this.store.select(selectUser).subscribe(() => {
      this.isLogged$ = localStorage.getItem(USER_TOKEN_CONST_NAME) ? true : false;
    });
  }

  openDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  logout() {
    this.store.dispatch(logoutUser());
  }
}
