// Ross
import { HomeComponent } from './home.component';
import { MaterialModule } from './../../shared/modules/material.module';
import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddDialogComponent} from './AddDialog/AddDialog.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
	],
	entryComponents: [AddDialogComponent],
	declarations: [
		CardComponent,
		HomeComponent,
		AddDialogComponent,
	]
})
export class HomeModule { }
