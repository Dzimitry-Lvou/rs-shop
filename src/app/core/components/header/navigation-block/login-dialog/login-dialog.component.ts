import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(RegistrationDialogComponent);
  }
}
