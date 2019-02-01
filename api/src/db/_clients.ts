import { Collection } from 'ts-migrator';
import { Collections } from '../models/enums/collections';

@Collection({
    name: Collections.Clients,
    // schema: {
    //     bsonType: 'object',
    //     required: ['_id', 'label', 'icon', 'isVisible'],
    //     additionalProperties: false,
    //     properties: {
    //         _id: {
    //             bsonType: 'objectId',
    //             description: 'must be a string and is required',
    //         },
    //         label: {
    //             bsonType: 'string',
    //             description: 'must be a string and is required',
    //         },
    //         icon: {
    //             bsonType: 'string',
    //             description: 'must be a string and is required',
    //         },
    //         isVisible: {
    //             bsonType: 'bool',
    //             description: 'must be a bool',
    //         },
    //     },
    // },
    // indexes: [
    //     { index: { isVisible: 1 } },
    // ],
})
export class ClientsCollection { }