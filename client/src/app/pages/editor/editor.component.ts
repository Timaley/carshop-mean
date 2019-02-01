import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/index';
import { ICar } from '../../shared/models/interfaces/car';
import { map } from 'rxjs/operators';
import { AddCarAction, EditCarAction } from '../../store/cars/cars.action';
import { getCarsStoreState } from '../../store/cars/cars.reducer';
import { DocumentFileType } from '../../shared/models/enums/uploader-item';
import { UploadButtonComponent } from './upload-button/upload-button.component';

@Component({
    selector: 'car-test-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, OnDestroy {

    editorMode: boolean = false;
    carForm: FormGroup;
    subscription: Subscription;
    data$: Observable<ICar>;
    carId: string;
    shopId: string;

    imagePath: string;

    supportedFormats: DocumentFileType[] = [
        // DocumentFileType.DOC, DocumentFileType.DOCX,
        DocumentFileType.JPEG,
        DocumentFileType.JPG,
        DocumentFileType.PNG,
        // DocumentFileType.PDF,
        // DocumentFileType.TXT, DocumentFileType.XLS,
        // DocumentFileType.XLSX,
    ];

    @ViewChild(UploadButtonComponent) uploader: UploadButtonComponent;

    constructor(
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private store: Store<IAppState>,
    ) { }

    ngOnInit(): void {
        // подписка на параметры передаваемые в url
        this.subscription = this.activatedRoute.params.subscribe((p) => {
            // если параметры переданы, то включается режим редактирования, которые изменяет название формы
            // if (p.shopId && p.carId) {
            if (p.carId) {
                this.carId = p.carId;
                // this.shopId = p.shopId;
                this.editorMode = true;
                this.data$ = this.store.select(getCarsStoreState).pipe(
                    map(s => {
                        // if (!s.cars) return;
                        // const shop = s.shops.find(s => s._id == p.shopId);
                        const car = s.cars && s.cars.find(c => c._id === p.carId);
                        // инициализируется форма со значениями из наденного выше объекта
                        this.initForm(car);
                        return car;
                    }));
            } else {
                this.shopId = p.shopId;
                this.initForm();
            }
            // в переменную data$ записываются данные из store

        });
    }

    initForm(car?: ICar): void {
        if (car) {
            this.carForm = this.fb.group({
                img: [car.img, [Validators.required]],
                color: [car.color, [Validators.required]],
                model: [car.model, [Validators.required]],
                price: [car.price, [Validators.required]],
                brand: [car.brand, [Validators.required]],
                age: [car.age, [Validators.required]],
                description: [car.description, [Validators.required]],
            });
        } else {
            this.carForm = this.fb.group({
                img: ['blank', [Validators.required]],
                color: ['blank', [Validators.required]],
                model: ['blank', [Validators.required]],
                price: ['0', [Validators.required]],
                brand: ['blank', [Validators.required]],
                age: ['0', [Validators.required]],
                description: ['blank', [Validators.required]],
            });
        }

    }

    onSubmit(): void {
        // console.log('submit fired1');
        if (!this.carForm.valid) return;
        if (this.editorMode) {
            this.editCar(this.carForm.value);
        } else {
            this.addCar(this.carForm.value);
        }
        this.router.navigate(['/home']);
    }

    addCar(formValue): void {
        // this.dataService.addCar(this.activatedRoute.params['value'].shopId, formValue);
        // this.httpService.addCar(this.activatedRoute.params['value'].shopId, formValue);
        // console.log('shopId: ', this.shopId);
        this.store.dispatch(new AddCarAction(
            {
                shopId: this.shopId,
                car: formValue,
            },
        ));
        // console.log('addCar x - ', x)

    }

    editCar(formValue): void {
        // const routeParams = this.activatedRoute.params['value'];
        // передаем в сервис значения из роутера и объект значений из формы
        // this.dataService.editCar(routeParams.shopId, routeParams.carId, formValue)
        // console.log('editCar', this.carId, formValue);
        this.store.dispatch(new EditCarAction(
            {
                ...formValue,
                _id: this.carId,
            },
        ));
    }
    // async onUploadClick() {
    //     // try {

    //     // this.uploader.showLoader();
    //     // const path = await this.uploader.uploadPublic();
    //     const path = await this.uploader.uploadPublic();
    //     console.log('path: ', path);
    //     this.imagePath = `http://localhost:3000/api/uploader/public/${path}`;
    //     this.carForm.patchValue({ img: this.imagePath });
    //     console.log('upd carForm:', this.carForm);

    //     // this.uploader.hideLoader();
    //     // }
    //     // catch (e) {
    //     //     // this.form.enable();
    //     //     this.uploader.hideLoader();
    //     //     console.log('File upload error from editor component');
    //     // }
    // }
    getPath(path) {
        // console.log('path in component: ', path);
        this.imagePath = `http://localhost:3000/api/uploader/public/?file=${path}`;
        this.carForm.patchValue({ img: this.imagePath });

    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
