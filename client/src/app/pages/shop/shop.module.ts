import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { MaterialModule } from '../../shared/modules/material.module';
// import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    // FormsModule,
  ],
  declarations: [ShopComponent, ShopItemComponent],
})
export class ShopModule { }
