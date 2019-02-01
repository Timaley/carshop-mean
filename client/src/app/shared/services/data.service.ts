// OLEG

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store';
// import {
//     DeleteShopAction,
//     DeleteCarAction,
//     EditCarAction,
//     AddCarAction
// } from '../../store/car-shops/car-shops.action';
import { ICar } from '../models/interfaces/car';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private store: Store<IAppState>) { }

    // deleteCarShop(shopId: number): void {
    //     this.store.dispatch(new DeleteShopAction(shopId));
    // }

    // deleteCar(shopId: number, carId: number): void {
    //     this.store.dispatch(new DeleteCarAction(shopId, carId));
    // }

    // editCar(shopId: number, carId: number, formValue: ICar) {
    //     this.store.dispatch(new EditCarAction(shopId, carId, formValue));
    // }

    // addCar(shopId: number, formValue: ICar) {
    //     this.store.dispatch(new AddCarAction(shopId, formValue));
    // }
    // updateShopCars(shopId, formValue){
    // }
}
