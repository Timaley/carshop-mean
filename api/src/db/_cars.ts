import { Collection } from 'ts-migrator';
import { Collections } from '../models/enums/collections';

@Collection({
    name: Collections.Cars,
    ////////////////
    // add items prop
    items: [{
        // _id: 0,
        img: 'http://all-auto.org/wp-content/uploads/2017/06/Moskvich-403-6.jpg',
        age: 1964,
        color: 'green',
        brand: 'Москвич',
        description: 'продаеться москвич с новым мотором коробка передач',
        price: 9600,
        model: '403',
    }, {
        // _id: 1,
        img: `http://www.carexpert.ru/img/foto800/bmw/bmw5426.jpg`,
        age: 1980,
        color: 'red',
        brand: 'ford',
        description: 'sedan',
        price: 999,
        model: 'focus',
    }, {
        // _id: 2,
        img: 'https://audi-kiev.com.ua/content/uploads/a3_sportback_Y1Y1_C7M.jpg',
        age: 2018,
        color: 'красный',
        brand: 'Audi',
        description: `Стремительные контуры крыши подчеркивают спортивный характер`,
        price: 27000,
        model: 'A3 Sportback',
    },
    {
        // _id: 3,
        img: `https://www.audi.by/content/dam/nemo/ru/models/r8/r8-coupe/
            my-2017/563x317-editorial-teaser/563x317_AR8_151005_1.jpg`,
        age: 2018,
        color: 'красный',
        brand: 'Audi',
        description: `Audi R8 V10 plus обеспечивает потрясающую мощность, которая
                         дополнительно подчеркивается более отточенным дизайном. Нет никаких сомнений в том,
                          что в Audi R8 Coup? присутствуют спортивные гены.`,
        price: 240000,
        model: 'R8',
    },
    {
        // _id: 4,
        img: `https://autoreview.ru/images/Article/1596/Article_159623_860_575.jpg`,
        age: 2019,
        color: 'темно-зеленый',
        brand: 'BMW',
        description: 'Новинка! Скоро во всех наших магазинах!',
        price: 150000,
        model: 'M5',
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
export class CarsCollection { }