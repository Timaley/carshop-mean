import { ObjectId } from 'bson';
import { ICar } from '../interfaces/car';

export class Car implements ICar {
    _id: ObjectId;
    img = '';
    age = 0;
    color = '';
    brand = '';
    description = '';
    price = 0;
    model = '';
}