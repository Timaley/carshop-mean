import { IAppState } from './store/index';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadCarShopsAction } from './store/car-shops/car-shops.action';
import { LoadCarsAction } from './store/cars/cars.action';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(
        private store: Store<IAppState>,
    ) {
        this.store.dispatch(new LoadCarShopsAction());
        this.store.dispatch(new LoadCarsAction());
    }
}
