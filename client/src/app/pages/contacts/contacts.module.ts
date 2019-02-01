// VLAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/modules/material.module';
import { SnackbarComponent } from './snackbar/snackbar/snackbar.component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
		MaterialModule,
	],
	entryComponents: [SnackbarComponent],
    declarations: [
        ContactsComponent,
        SnackbarComponent,
    ],
    exports: [ContactsComponent],
})
export class ContactsModule { }