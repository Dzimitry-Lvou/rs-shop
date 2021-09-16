import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.scss'],
})
export class UserToolsComponent {
  isOpen = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginDialogComponent);
  }
}
