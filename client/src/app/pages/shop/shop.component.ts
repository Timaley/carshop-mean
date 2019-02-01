import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store';
import { map } from 'rxjs/operators';
import { getCarShopsStoreState } from './../../store/car-shops/car-shops.reducer';
import { ICarShop } from '../../shared/models/interfaces/car-shop';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { ICar } from '../../shared/models/interfaces/car';
import { getCarsStoreState } from '../../store/cars/cars.reducer';
import { DeleteCarAction } from '../../store/cars/cars.action';

@Component({
    selector: 'car-test-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {
    shopId;
    carShop$: Observable<ICar[]>;
    carIds$: Observable<string[]>;
    sub: Subscription;
    searchString: string = '';

    // combineLatest
    shop$: Observable<ICarShop>;
    cars$: Observable<ICar[]>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private store: Store<IAppState>,
        private router: Router,
    ) { }

    ngOnInit() {
        this.shop$ = combineLatest(
            this.activatedRoute.params.pipe(
                map(p => {
                    this.shopId = p.id;
                    return p.id;
                }),
            ),
            this.store.select(getCarShopsStoreState).pipe(
                map(s => s.shops),
            )).pipe(
                map(([id, shops]) => {
                    if (!shops || !id || !shops.length) return;
                    return shops.find(s => s._id === id);
                }),
            );

        this.cars$ = combineLatest(
            this.shop$,
            this.store.select(getCarsStoreState).pipe(map(s => s.cars)),
        ).pipe(
            map(
                ([shop, cars]) => {
                    if (!shop || !shop.cars || !shop.cars.length || !cars || !cars.length) return;
                    return cars.filter(car => car && shop.cars.includes(car._id));
                },
            ),
        );

        ///////////////////////////////////////
        // with subscription and withLatestFrom

        // this.sub = this.activatedRoute.params.subscribe((p) => this.shopId = p.id);
        // this.carIds$ = this.store.select(getCarShopsStoreState).pipe(
        //     map(s => {
        //         const shop = s.shops && s.shops.find(shop => shop._id == this.shopId);
        //         return shop && shop.cars;
        //     })
        // );

        // this.carShop$ = this.store.select(getCarsStoreState).pipe(
        //     withLatestFrom(this.carIds$, (data, ids) => {
        //         if (!ids) return
        //         // console.log('WITH LATEST FROM: ', data.cars, ids);
        //         return data.cars.filter(
        //             car => { if (ids.indexOf(car._id) >= 0) return car }
        //         )
        //     })
        // )
        //////////////////////

    }

    onClick(i: string): void {
        this.router.navigate([`/car-info/${i}`]);
    }

    onAddClick(): void {
        this.router.navigate([`/edit/${this.shopId}`]);
    }

    onEditClick(i): void {
        // event.stopPropogation();
        this.router.navigate([`/edit/car/${i}`]);
    }

    onDeleteClick(carId: string): void {
        // event.stopPropogation();
        this.store.dispatch(new DeleteCarAction(carId));
    }

    goHome(): void {
        this.router.navigate([`/home`]);
    }

    ngOnDestroy(): void {
        if (this.sub) this.sub.unsubscribe();
    }
}
