import { ICarShop } from './../../shared/models/interfaces/car-shop';
import { CarShopsActions, CarShopsTypes } from './car-shops.action';
import { createFeatureSelector } from '@ngrx/store';
import { ICar } from '../../shared/models/interfaces/car';

export class CarShopsState {
    shops: ICarShop[];
    isCarShopsLoading: boolean = true;
}

export function reducer(state = new CarShopsState(), action: CarShopsActions): CarShopsState {
    switch (action.type) {
        case CarShopsTypes.LoadCarShops:
            return {
                ...state,
                isCarShopsLoading: true,
            };
        case CarShopsTypes.LoadCarShopsSuccess:
            return {
                ...state,
                shops: action.payload,
                isCarShopsLoading: false,
            };
        case CarShopsTypes.LoadCarShopsError:
            return {
                ...state,
                isCarShopsLoading: false,
                shops: [],
            };
        case CarShopsTypes.AddCarToShop:
            return {
                ...state,
                shops: [...state.shops.map((shop) => {
                    if (shop._id === action.payload.shopId) {
                        return { ...shop, cars: shop.cars.concat(action.payload.carId) };
                    } else return shop;
                })],
            };
        case CarShopsTypes.DeleteCarFromShop:
            return {
                ...state,
                shops: state.shops.map(shop => {
                    return {
                        ...shop,
                        cars: shop.cars.filter(carId => {
                            return carId !== action.payload;
                        }),
                    };
                }),
            };
        default: {
            return state;
        }
    }
}

export const getCarShopsStoreState = createFeatureSelector<CarShopsState>('carShops');