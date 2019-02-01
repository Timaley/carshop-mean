import { ObjectId } from 'mongodb';
export interface ICar {
    _id: ObjectId;
    img: string;
    age: number;
    color: string;
    brand: string;
    description: string;
    price: number;
    model: string;
}