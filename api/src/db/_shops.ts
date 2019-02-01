import { Collection } from 'ts-migrator';
import { Collections } from '../models/enums/collections';
import { ObjectId } from 'mongodb';

@Collection({
    name: Collections.Shops,
    ////////////////
    // add items prop
    items: [
        {
            name: 'av.by',
            // tslint:disable-next-line:max-line-length
            imgShop: `https://is3-ssl.mzstatic.com/image/thumb/Purple115/v4/b2/63/09/b263099f-50a1-cdea-ba31-156f6e4fd843/AppIcon-1x_U007emarketing-85-220-0-6.png/1200x630wa.jpg`,
            // cars: ['5bdc34249df67216b48edd6a'],
            // cars: [new ObjectId('5bdc3ae402d35e07eceb16e5')],
            cars: [],
        },
        {
            name: 'vasheavto.ru',
            imgShop: 'https://images.inwx.com/flags/auto.png',
            // cars: [new ObjectId('5bdc3ae402d35e07eceb16e6')],
            cars: [],
        }, {
            name: 'ab.onliner',
            imgShop: `https://content.onliner.by/news/realt/2011/11/ca13535beebd53e8cfdc440e70cf566b-2.jpg`,
            // cars: [new ObjectId('5bdc3ae402d35e07eceb16e7')],
            cars: [],
        },
    ],
    ////////////////
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
export class ShopsCollection { }