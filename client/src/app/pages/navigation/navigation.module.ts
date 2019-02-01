// Artem

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from '../../shared/modules/material.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../../shared/pipes/search.pipe';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
    ],

    declarations: [
        NavigationComponent,
        SearchComponent,
        SearchFilterPipe,
    ],

    exports: [
        NavigationComponent,
    ],
})
export class NavigationModule { }