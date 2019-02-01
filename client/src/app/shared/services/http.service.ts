import { ICarShop } from './../models/interfaces/car-shop';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICar } from '../models/interfaces/car';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient, private store: Store<IAppState>) { }

    get apiUrl(): string {
        return 'http://localhost:3000/api';
    }

    getCarShops(): Observable<ICarShop[]> {
        return this.http.get<ICarShop[]>(`${this.apiUrl}/shops`);
    }

    getCars(): Observable<ICar[]> {
        return this.http.get<ICar[]>(`${this.apiUrl}/cars`);
    }

    addCar(shopId: string, car: ICar): any {
        const body = { car: { ...car }, shopId: shopId };
        return this.http.post<any>(`${this.apiUrl}/cars`, body);
    }

    editCar(car: ICar): any {
        return this.http.put<any>(`${this.apiUrl}/cars`, car);
    }

    deleteCar(carId: string): any {
        return this.http.delete<any>(`${this.apiUrl}/cars/${carId}`);
    }

}
