import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { EditorComponent } from './pages/editor/editor.component';
import { CarInfoComponent } from './pages/car-info/carInfo.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop/:id', component: ShopComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/:shopId', component: ContactsComponent },
  { path: 'edit', component: EditorComponent },
  { path: 'edit/:shopId', component: EditorComponent },
  { path: 'edit/car/:carId', component: EditorComponent },
//   { path: 'car-info/:id', component: CarInfoComponent},
  { path: 'car-info/:carId', component: CarInfoComponent},
//   { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
