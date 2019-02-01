import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISearchItem } from '../../../shared/models/interfaces/search-item';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getCarsStoreState } from '../../../store/cars/cars.reducer';
import { getCarShopsStoreState } from '../../../store/car-shops/car-shops.reducer';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    searchString: string = '';
    searchData$: Observable<ISearchItem[]>;

    @Output() closeSideNav = new EventEmitter();

    constructor(private store: Store<IAppState>, private router: Router) { }

    ngOnInit() {
        this.searchData$ = combineLatest(
            this.store.select(getCarsStoreState).pipe(
                map(s => {
                    if (!s.cars || !s.cars.length) return;
                    return s.cars.map(c => {
                        // let shopId;
                        // this.store.select(getCarShopsStoreState).pipe(
                        //     map(carShops => {
                        //         if (!carShops.shops || !carShops.shops.length) return;
                        //         shopId = carShops.shops.find(shop => shop.cars.includes(c._id));
                        //     }),
                        // );
                        return {
                            image: c.img,
                            title: c.brand,
                            // _shopId: '',
                            _carId: c._id,
                            _description: c.model,
                        };
                    });
                }),
            ),
            this.store.select(getCarShopsStoreState).pipe(
                map(s => {
                    if (!s.shops || !s.shops.length) return;
                    return s.shops.map(shop => {
                        return {
                            image: shop.imgShop,
                            title: shop.name,
                            _shopId: shop._id,
                        };
                    });
                }),
            ),
        ).pipe(
            map(([cars, shops]) => {
                if (!shops || !shops.length || !cars || !cars.length) return;
                // return shops.concat(cars);
                return [...shops, ...cars];
            }));
    }

    onClick(item) {
        if (!item._carId) {
            this.router.navigate([`/shop/${item._shopId}`]);
            this.closeSideNav.emit();
        }
        else {
            // this.router.navigate([`/car-info/${item.shopId}/${item._carId}`]);
            this.router.navigate([`/car-info/${item._carId}`]);
            this.closeSideNav.emit();
        }
        this.searchString = '';
    }
}
