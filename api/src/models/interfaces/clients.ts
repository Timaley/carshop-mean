import { ObjectId } from 'mongodb';
export interface IClient {
    _id: ObjectId;
    label: string;
    icon: string;
    isVisible?: boolean;
}