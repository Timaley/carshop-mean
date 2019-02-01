// OLEG

import { MaterialModule } from './../../shared/modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadButtonComponent } from './upload-button/upload-button.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    declarations: [EditorComponent, UploadButtonComponent],
})
export class EditorModule { }
