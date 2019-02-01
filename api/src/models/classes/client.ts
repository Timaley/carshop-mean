import { IClient } from '../interfaces/clients';
import { ObjectId } from 'bson';

export class Client implements IClient {
    _id: ObjectId;
    label = '';
    icon = '';
    isVisible = false;
}