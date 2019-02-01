import { ICarShop } from './../../shared/models/interfaces/car-shop';
import { Action } from '@ngrx/store';

export enum CarShopsTypes {
    LoadCarShops = '[CAR-SHOP] load car shops [...]',
    LoadCarShopsSuccess = '[CAR-SHOP] load car shops [SUCCESS]',
    LoadCarShopsError = '[CAR-SHOP] load car shops [ERROR]',
    AddCarToShop = '[CAR-SHOP] add car to shop [...]',
    DeleteCarFromShop = '[CAR-SHOP] delete car from shop [...]',
}

// LOAD CAR SHOPS
export class LoadCarShopsAction implements Action {
    readonly type = CarShopsTypes.LoadCarShops;
}

export class LoadCarShopsSuccessAction implements Action {
    readonly type = CarShopsTypes.LoadCarShopsSuccess;
    constructor(public payload: ICarShop[]) { }
}

export class LoadCarShopsErrorAction implements Action {
    readonly type = CarShopsTypes.LoadCarShopsError;
    constructor(public payload: any) { }
}
// ADD CAR

export class AddCarToShopAction implements Action {
    readonly type = CarShopsTypes.AddCarToShop;
    constructor(public payload: { shopId: string, carId: string }) { }
}
// DELETE CAR

export class DeleteCarFromShopAction implements Action {
    readonly type = CarShopsTypes.DeleteCarFromShop;
    constructor(public payload: string) { }
}

// // LOAD CARS
// export class LoadCarsAction implements Action {
//     readonly type = CarShopsTypes.LoadCars;
// }

// export class LoadCarsSuccessAction implements Action {
//     readonly type = CarShopsTypes.LoadCarsSuccess;
//     constructor(public payload: ICar[]) { }
// }

// export class LoadCarsErrorAction implements Action {
//     readonly type = CarShopsTypes.LoadCarsError;
//     constructor(public payload: any) { }
// }
// // ЛОКАЛЬНОЕ РЕДАКТИРОВАНИЕ СТОРА
// // экшн на удаление шопа из стора
// export class DeleteShopAction implements Action {
//     // объявление свойства type у экшена, по нему редюсер определит свое поведение
//     readonly type = CarShopsTypes.DeleteShop;
//     // в конструктор передаются необходимые значения
//     constructor(public shopId: number) { }
// }
// // экшн на удаление машины из стора
// export class DeleteCarAction implements Action {
//     // объявление свойства type у экшена, по нему редюсер определит свое поведение
//     readonly type = CarShopsTypes.DeleteCar;
//     // в конструктор передаются необходимые значения
//     constructor(public shopId: number, public carId: number) {
//     }
// }
// export class EditCarAction implements Action {
//     // объявление свойства type у экшена, по нему редюсер определит свое поведение
//     readonly type = CarShopsTypes.EditCar;
//     // в конструктор передаются необходимые значения (id магазина и машины, плюс объект
//     // с новыми значениями из формы)
//     constructor(public shopId: number, public carId: number, public formValue: ICar) {
//     }
// }
// export class AddCarAction implements Action {
//     // объявление свойства type у экшена, по нему редюсер определит свое поведение
//     readonly type = CarShopsTypes.AddCar;
//     // в конструктор передаются необходимые значения (id магазина, плюс объект
//     // с новыми значениями из формы)
//     constructor(public shopId: number, public formValue: ICar) {
//     }
// }

// тут экспортируются типы
export type CarShopsActions
    = LoadCarShopsAction
    | LoadCarShopsSuccessAction
    | LoadCarShopsErrorAction
    | AddCarToShopAction
    | DeleteCarFromShopAction
    // | LoadCarsAction
    // | LoadCarsSuccessAction
    // | LoadCarsErrorAction
    // | DeleteShopAction
    // | DeleteCarAction
    // | EditCarAction
    // | AddCarAction
    ;