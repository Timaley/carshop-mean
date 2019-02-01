import { HomeModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from './pages/editor/editor.module';
import { NavigationModule } from './pages/navigation/navigation.module';
import { ContactsModule } from './pages/contacts/contacts.module';
import { CarInfoModule } from './pages/car-info/carInfo.module';
import { StoreModule } from '@ngrx/store';
import { appReducers, metaReducers } from './store/index';
import { EffectsModule } from '@ngrx/effects';
import { CarShopsEffects } from './store/car-shops/car-shops.effect';
import { CarsEffects } from './store/cars/cars.effect';
import { ShopModule } from './pages/shop/shop.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SearchFilterPipe } from './shared/pipes/search.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EditorModule,
    NavigationModule,
    ContactsModule,
    CarInfoModule,
    HomeModule,
    ShopModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    // !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    EffectsModule.forRoot([
      CarShopsEffects,
      CarsEffects,
    ]),
    // StoreModule.provideStore({ reducer })
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
  ],
  declarations: [
    AppComponent,
    // SearchFilterPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }