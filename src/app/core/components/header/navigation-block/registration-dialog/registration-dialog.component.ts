import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss'],
})
export class RegistrationDialogComponent {
  registryForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public dialog: MatDialog, private authService: AuthService) {}

  openDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  onSubmit() {
    const { login, password } = this.registryForm.value;
    this.authService.registry(login, password).subscribe(() => {
      this.dialog.closeAll();
      this.openDialog();
    });
  }
}
