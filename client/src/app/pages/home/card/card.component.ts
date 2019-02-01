import { Router } from '@angular/router';
import { ICarShop } from './../../../shared/models/interfaces/car-shop';
import { Component, Input } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';

@Component({
	selector: 'card-content',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	@Input() carShop: ICarShop;
	@Input() carIndex: number;

	constructor(
        private router: Router,
           private dataService: DataService
	) { }

	onEditClick() {
		// this.router.navigate([`/edit/${this.carIndex}`]);
	}

	onContactClick() {
		this.router.navigate([`/contacts/${this.carShop._id}`]);
	}

	onDeleteClick() {
        // выполняется метод deleteCarShop из httpService
        // this.dataService.deleteCarShop(this.carShop._id)

	}
}
