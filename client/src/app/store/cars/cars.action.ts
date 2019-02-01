import { Action } from '@ngrx/store';
import { ICar } from '../../shared/models/interfaces/car';

export enum CarsTypes {
    LoadCars = '[CAR-SHOP] load cars [...]',
    LoadCarsSuccess = '[CAR-SHOP] load cars [SUCCESS]',
    LoadCarsError = '[CAR-SHOP] load cars [ERROR]',
    AddCar = '[CAR-SHOP] add car [...]',
    AddCarSuccess = '[CAR-SHOP] add car [SUCCESS]',
    AddCarError = '[CAR-SHOP] add car [ERROR]',
    EditCar = '[CAR-SHOP] edit car [...]',
    EditCarSuccess = '[CAR-SHOP] edit car [SUCCESS]',
    EditCarError = '[CAR-SHOP] edit car [ERROR]',
    DeleteCar = '[CAR-SHOP] delete car [...]',
    DeleteCarSuccess = '[CAR-SHOP] delete car [SUCCESS]',
    DeleteCarError = '[CAR-SHOP] delete car [ERROR]',
}

// LOAD CARS
export class LoadCarsAction implements Action {
    readonly type = CarsTypes.LoadCars;
}

export class LoadCarsSuccessAction implements Action {
    readonly type = CarsTypes.LoadCarsSuccess;
    constructor(public payload: ICar[]) { }
}

export class LoadCarsErrorAction implements Action {
    readonly type = CarsTypes.LoadCarsError;
    constructor(public payload: any) { }
}
// ADD CARS
export class AddCarAction implements Action {
    readonly type = CarsTypes.AddCar;
    constructor(public payload: { shopId: string, car: ICar }) { }
}

export class AddCarSuccessAction implements Action {
    readonly type = CarsTypes.AddCarSuccess;
    constructor(public payload: ICar) { }
}

export class AddCarErrorAction implements Action {
    readonly type = CarsTypes.AddCarError;
    constructor(public payload: any) { }
}
// EDIT CAR
export class EditCarAction implements Action {
    readonly type = CarsTypes.EditCar;
    constructor(public payload: ICar) { }
}

export class EditCarSuccessAction implements Action {
    readonly type = CarsTypes.EditCarSuccess;
    constructor(public payload: ICar) { }
}

export class EditCarErrorAction implements Action {
    readonly type = CarsTypes.EditCarError;
    constructor(public payload: any) { }
}
// DEL CAR
export class DeleteCarAction implements Action {
    readonly type = CarsTypes.DeleteCar;
    constructor(public payload: string) { }
}

export class DeleteCarSuccessAction implements Action {
    readonly type = CarsTypes.DeleteCarSuccess;
    constructor(public payload: string) { }
}

export class DeleteCarErrorAction implements Action {
    readonly type = CarsTypes.DeleteCarError;
    constructor(public payload: any) { }
}

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
export type CarsActions
    = LoadCarsAction
    | LoadCarsSuccessAction
    | LoadCarsErrorAction
    | AddCarAction
    | AddCarSuccessAction
    | AddCarErrorAction
    | EditCarAction
    | EditCarSuccessAction
    | EditCarErrorAction
    | DeleteCarAction
    | DeleteCarSuccessAction
    | DeleteCarErrorAction
    ;