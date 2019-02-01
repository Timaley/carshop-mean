import { ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { MetaReducer } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';
import * as carShops from './car-shops/car-shops.reducer';
import * as cars from './cars/cars.reducer';
import { environment } from '../../environments/environment';
// import { CarsState, reducer } from './cars/cars.reducer';

export interface IAppState {
    carShops: carShops.CarShopsState;
    cars: cars.CarsState;
}

export const appReducers: ActionReducerMap<IAppState> = {
    carShops: carShops.reducer,
    cars: cars.reducer,
};

export function logger(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
    return (state: IAppState, action: any): IAppState => {
        console.log(state, action);
        return reducer(state, action);
    };
}

// export const metaReducers: MetaReducer<IAppState>[] = !environment.production
export const metaReducers: Array<MetaReducer<IAppState>> = !environment.production
    ? [logger, storeFreeze]
    : [];
