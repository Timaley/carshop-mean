import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from '../../../shared/models/interfaces/car';

@Component({
    selector: 'shop-item',
    templateUrl: './shop-item.component.html',
    styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent {
    @Input() car: ICar;
    @Output() editClick: EventEmitter<any> = new EventEmitter();
    @Output() deleteClick: EventEmitter<any> = new EventEmitter();

    onEditClick(event: Event, carId: string): void {
        event.stopPropagation();
        this.editClick.emit(carId);

    }
    onDeleteClick(event: Event, carId: string): void {
        event.stopPropagation();
        this.deleteClick.emit(carId);
    }

}
