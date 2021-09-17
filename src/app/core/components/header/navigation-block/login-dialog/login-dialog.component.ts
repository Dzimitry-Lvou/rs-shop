import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/services/auth.service';
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
    public dialog: MatDialog,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
  ) {}

  openDialog() {
    this.dialog.open(RegistrationDialogComponent);
  }

  onSubmit() {
    const { login, password } = this.loginForm.value;
    this.authService.login(login, password).subscribe(
      ({ token }) => {
        localStorage.setItem('dl-rs-shop-token', token);
        console.log(localStorage.getItem('dl-rs-shop-token'));
        this.dialog.closeAll();
      },
      (e) => {
        if (e.status === 401) {
          this.openSnackBar('Пользователь с такими логином и пароллем не найден');
        } else {
          this.openSnackBar(e.message);
        }
      },
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
}
