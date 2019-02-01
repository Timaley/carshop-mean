import { Component, OnInit } from '@angular/core';
import { emailValidator, nameValidator } from '../../shared/validators/contacts-validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICarShop } from '../../shared/models/interfaces/car-shop';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/index';
import { getCarShopsStoreState } from '../../store/car-shops/car-shops.reducer';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from './snackbar/snackbar/snackbar.component';

@Component({
    selector: 'car-test-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
})

export class ContactsComponent implements OnInit {
    carIndex: number;
    carShopObject: ICarShop;
    subscription: Subscription;
    data$: Observable<ICarShop>;

    contactsForm: FormGroup = this.fb.group({
        carShopemail: ['', [
        ]],
        firstName: ['', [
            Validators.required,
            nameValidator,
        ]],
        email: ['', [
            Validators.required,
            emailValidator,
        ]],
        textArea: ['', [
        ]],
    });

    constructor(
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private store: Store<IAppState>,
        public snackBar: MatSnackBar,
    ) { }

    ngOnInit(): void {
        // подписка на параметры передаваемые в url
        this.subscription = this.activatedRoute.params.subscribe((p) => {
            if (!p.shopId) {
                this.contactsForm.controls['carShopemail'].setValue('Car Shop carshop@gmail.com');
                return;
            }
            // в переменную data$ записываются данные из store
            this.data$ = this.store.select(getCarShopsStoreState).pipe(
                map(s => {
                    if (!s.shops) return;
                    const shop = s.shops.find(s => s._id == p.shopId);
                    this.contactsForm.controls['carShopemail'].setValue(shop.name);
                    return shop;
                }));
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }

    onSubmit() {
        const controls = this.contactsForm.controls;
        if (this.contactsForm.invalid) {
            Object.keys(controls)
                .forEach(controlName => controls[controlName].markAsTouched());
            return;
        }
        this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 1500,
        });
        console.log('The message has been sent: ');
        console.log(this.contactsForm.value);
        console.log('Car shop: ' + this.contactsForm.value.carShopemail);
        console.log('Name: ' + this.contactsForm.value.firstName);
        console.log('E-mail: ' + this.contactsForm.value.email);
        console.log('Message: ' + this.contactsForm.value.textArea);
        this.contactsForm.reset();
    }

    isControlInvalid(controlName: string): boolean {
        const control = this.contactsForm.controls[controlName];
        const result = control.invalid && control.touched;
        return result;
    }

}
