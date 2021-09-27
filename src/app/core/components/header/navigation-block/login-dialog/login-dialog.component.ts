import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AuthService, USER_TOKEN_CONST_NAME } from 'src/app/core/services/auth.service';
import { SnackBarService } from 'src/app/core/services/snackbar.service';
import { loginUser } from 'src/app/redux/actions/card.actions';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent {
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private store: Store,
    private authService: AuthService,
    public dialog: MatDialog,
    private snackBarService: SnackBarService,
  ) {}

  openDialog() {
    this.dialog.open(RegistrationDialogComponent);
  }

  onSubmit() {
    const { login, password } = this.loginForm.value;
    this.authService.login(login, password).subscribe(
      ({ token }) => {
        localStorage.setItem(USER_TOKEN_CONST_NAME, token);
        this.store.dispatch(loginUser());
        this.dialog.closeAll();
      },
      (e) => {
        if (e.status === 401) {
          this.snackBarService.openSnackBar('Пользователь с такими логином и пароллем не найден');
        } else {
          this.snackBarService.openSnackBar(e.message);
        }
      },
    );
  }
}
