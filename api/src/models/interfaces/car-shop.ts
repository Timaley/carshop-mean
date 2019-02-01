// import { ICar } from './car';
import { ObjectId } from 'mongodb';

export interface ICarShop {
    _id?: ObjectId;
    imgShop: string;
    name: string;
    cars: ObjectId[];
}