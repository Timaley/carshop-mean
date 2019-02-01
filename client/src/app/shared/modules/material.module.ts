import {
  MatButtonModule, MatIconModule, MatInputModule, MatCardModule,
  MatListModule, MatSidenavModule, MatDialogModule,
} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  imports: [MatButtonModule, MatInputModule, MatIconModule, MatCardModule,
    MatListModule, MatSidenavModule, MatDialogModule, MatSnackBarModule],
  exports: [MatButtonModule, MatInputModule, MatIconModule, MatCardModule,
    MatListModule, MatSidenavModule, MatDialogModule, MatSnackBarModule],
})
export class MaterialModule { }