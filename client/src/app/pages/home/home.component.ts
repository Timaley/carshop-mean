import { getCarShopsStoreState } from './../../store/car-shops/car-shops.reducer';
import { Observable } from 'rxjs';
import { ICarShop } from './../../shared/models/interfaces/car-shop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store';
import { map } from 'rxjs/operators';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddDialogComponent } from './AddDialog/AddDialog.component';

@Component({
    selector: 'home-content',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    carShops$: Observable<ICarShop[]>;
    // cars$: Observable<ICar[]>;
    fileNameDialogRef: MatDialogRef<AddDialogComponent>;

    constructor(
        private router: Router,
        private store: Store<IAppState>,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.carShops$ = this.store.select(getCarShopsStoreState).pipe(map(s => s.shops));
        // this.cars$ = this.store.select(getCarShopsStoreState).pipe(map(s => s.cars));
    }

    onClick(i) {
        this.router.navigate([`/shop/${i}`]);
    }

    onAddClick() {
        this.router.navigate(['/edit/']);
    }
    openAddCarDialog() {
        this.fileNameDialogRef = this.dialog.open(AddDialogComponent, { hasBackdrop: true },
        );
    }

}
