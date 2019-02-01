import { getCarsStoreState } from './../../store/cars/cars.reducer';
import { IAppState } from './../../store/index';
import { ICar } from './../../shared/models/interfaces/car';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
    selector: 'car-info',
    templateUrl: './carInfo.component.html',
    styleUrls: ['./carInfo.component.scss'],
})

export class CarInfoComponent implements OnInit, OnDestroy {
    data$: Observable<ICar>;
    subscription: Subscription;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store: Store<IAppState>,
        private location: Location,
    ) { }

    ngOnInit(): void {
        // подписываемся на изменения параметров из строки браузера. в ней имеются два свойства
        // свойства carId и shopId, которые есть в строке браузера. эти свойства задаются в app.routing (см. 18 строка)
        // проверить можно "subscribe((p) => {console.log(p, 'ggg')}"
        this.subscription = this.activatedRoute.params.subscribe((p) => {
            // метод pipe преобразует ???асинхронные??? данные в "нормальные"
            // при выводе в консоль оно выдаст нам наш стор
            this.data$ = this.store.select(getCarsStoreState).pipe(
                map(s => {
                    if (!s.cars) return;
                    const car = s.cars && s.cars.find(c => c._id === p.carId);
                    return car;
                }),
            );
            // this.data$ = this.store.select(getCarShopsStoreState).pipe(
            //     map(s => {
            //         if (!s.cars) return;
            //         const car = s.cars && s.cars.find(c => c._id == p.carId);
            //         return car;
            //     })
            // );
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }

    goEdit(): void {
        this.subscription = this.activatedRoute.params.subscribe((p) => {
            // this.router.navigate([`/edit/${p.shopId}/${p.carId}`]);
            this.router.navigate([`/edit/car/${p.carId}`]);
        });
    }

    goHome(): void {
        this.location.back();
    }
}