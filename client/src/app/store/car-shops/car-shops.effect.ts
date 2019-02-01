import { HttpService } from './../../shared/services/http.service';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import {
    CarShopsActions, CarShopsTypes, LoadCarShopsAction,
    LoadCarShopsSuccessAction, LoadCarShopsErrorAction,
} from './car-shops.action';

@Injectable()
export class CarShopsEffects {

    @Effect()
    loadCarShops$: Observable<CarShopsActions> = this.actions$.pipe(
        ofType<LoadCarShopsAction>(CarShopsTypes.LoadCarShops),
        switchMap(() => {
            return this.http.getCarShops().pipe(
                map((res: any) => new LoadCarShopsSuccessAction(res)),
                catchError(error => of(new LoadCarShopsErrorAction(error))),
            );
        }),
    );

    @Effect({ dispatch: false })
    onError$: Observable<CarShopsActions> = this.actions$.pipe(
        ofType<LoadCarShopsErrorAction>
            (CarShopsTypes.LoadCarShopsError),
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