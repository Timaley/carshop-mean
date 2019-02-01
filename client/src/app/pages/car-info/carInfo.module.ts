//Maxim
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInfoComponent } from './carInfo.component';
import { MaterialModule } from '../../shared/modules/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    declarations: [
        CarInfoComponent,
    ],
})
export class CarInfoModule { }

