import { HttpService } from './../../shared/services/http.service';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { of, Observable, empty } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {
    CarsActions, LoadCarsAction, LoadCarsSuccessAction, LoadCarsErrorAction, CarsTypes,
    AddCarAction, AddCarErrorAction, AddCarSuccessAction, EditCarAction, EditCarSuccessAction,
    EditCarErrorAction, DeleteCarAction, DeleteCarSuccessAction, DeleteCarErrorAction,
} from './cars.action';
import { AddCarToShopAction, DeleteCarFromShopAction } from '../car-shops/car-shops.action';
import { Action } from '@ngrx/store';

@Injectable()
export class CarsEffects {
    @Effect()
    loadCars$: Observable<CarsActions> = this.actions$.pipe(
        ofType<LoadCarsAction>(CarsTypes.LoadCars),
        switchMap(() => {
            return this.http.getCars().pipe(
                map((res: any) => new LoadCarsSuccessAction(res)),
                catchError(error => of(new LoadCarsErrorAction(error))),
            );
        }),
    );

    @Effect()
    addCar$: Observable<CarsActions> = this.actions$.pipe(
        ofType<AddCarAction>(CarsTypes.AddCar),
        switchMap((value) => {
            return this.http.addCar(value.payload.shopId, value.payload.car).pipe(
                switchMap((res: any) => {
                    return of(new AddCarSuccessAction({ ...value.payload.car, _id: res }),
                        new AddCarToShopAction({ shopId: value.payload.shopId, carId: res }));
                }),
                catchError(error => of(new AddCarErrorAction(error))),
            );
        }),
    );

    @Effect()
    editCar$: Observable<CarsActions> = this.actions$.pipe(
        ofType<EditCarAction>(CarsTypes.EditCar),
        switchMap((value) => {
            return this.http.editCar(value.payload).pipe(
                map(() => {
                    return new EditCarSuccessAction({ ...value.payload });
                }),
                catchError(error => of(new EditCarErrorAction(error))),
            );
        }),
    );

    @Effect()
    deleteCar$: Observable<CarsActions> = this.actions$.pipe(
        ofType<DeleteCarAction>(CarsTypes.DeleteCar),
        map(action => action.payload),
        switchMap((carId: string) => {
            return this.http.deleteCar(carId).pipe(
                switchMap(() => {
                    return of(
                        new DeleteCarSuccessAction(carId),
                        new DeleteCarFromShopAction(carId));
                }),
                catchError(error => of(new AddCarErrorAction(error))),
            );
        }),
    );

    @Effect({ dispatch: false })
    onError$: Observable<Action> = this.actions$.pipe(
        ofType<DeleteCarErrorAction | EditCarErrorAction | AddCarErrorAction | LoadCarsErrorAction>
            (CarsTypes.DeleteCarError, CarsTypes.EditCarError, CarsTypes.AddCarError, CarsTypes.LoadCarsError),
        map(action => action.payload),
        tap(e => {
            console.error(e);
            // this.errorService.toConsole(e);
        }),
    );

    constructor(
        private actions$: Actions,
        private http: HttpService,
    ) { }
}