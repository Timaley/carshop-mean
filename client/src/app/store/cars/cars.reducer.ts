import { ICarShop } from './../../shared/models/interfaces/car-shop';
import { CarsActions, CarsTypes } from './cars.action';
import { createFeatureSelector } from '@ngrx/store';
import { ICar } from '../../shared/models/interfaces/car';

export class CarsState {
    shops: ICarShop[];
    cars: ICar[];
    // isCarsLoading: boolean = true;
    isCarsLoading: boolean = true;
}

export function reducer(state = new CarsState(), action: CarsActions): CarsState {

    switch (action.type) {

        // LOAD CARS
        case CarsTypes.LoadCars:
            return {
                ...state,
                isCarsLoading: true,
            };
        case CarsTypes.LoadCarsSuccess:
            return {
                ...state,
                cars: action.payload,
                isCarsLoading: false,
            };
        case CarsTypes.LoadCarsError:
            return {
                ...state,
                isCarsLoading: false,
                cars: [],
            };
        case CarsTypes.AddCarSuccess:
            return {
                ...state,
                cars: [
                    ...state.cars,
                    action.payload,
                ],
            };
        case CarsTypes.EditCarSuccess:
            return {
                ...state,
                cars: [
                    ...state.cars.map((car: ICar) => {
                        if (car._id !== action.payload._id) return car;
                        return { ...action.payload };
                    }),
                ],
            };
        case CarsTypes.DeleteCarSuccess:
            return {
                ...state,
                cars: [
                    ...state.cars.filter(car => {
                        return car._id !== action.payload;
                    }),
                ],
            };
        // // в случае если значение типа экшена (action.type) совпадает, выполняется объявленное в {}
        // case CarShopsTypes.DeleteShop: {
        //     // console.log(action, state);
        //     //создание константы для обновленного store.shops // отфильтровывается шоп с id переданным в экшен
        //     const updatedShops: ICarShop[] = state.shops.filter(shop => {
        //         return shop._id !== action.shopId
        //     })
        //     // console.log(updatedShops);
        //     //возвращается новый объект стора
        //     return {
        //         ...state,
        //         shops: updatedShops,
        //     };
        // }
        // // удаление одной машины из шопа
        // case CarShopsTypes.DeleteCar: {
        //     // через оператор map перебераются объекты из массива state.shops
        //     const updatedShops: ICarShop[] = state.shops.map(shop => {
        //         // если id шопа не совпадает со свойством shopId переданным в action,
        //         // этот шоп возвращается без изменений.
        //         if (shop._id != action.shopId) return shop;
        //         // иначе через оператор filter перебираются все объекты из массива shop.cars,
        //         // и отфильтровывается объект из массива со свойством _id равным action.carId
        //         const updatedShopCars: ICar[] = shop.cars.filter(car => car._id != action.carId)
        //         // далее возвращаем объект, в котором распространяем через оператор ...
        //         // все значения перебираемого через MAP шопа, и дополнительно перезаписываем
        //         // имеющееся в нем свойство cars, на свойство cars со значением отфильтрованного
        //         // строкой выше массива
        //         return {
        //             ...shop,
        //             cars: updatedShopCars
        //         };
        //     })
        //     return {
        //         ...state,
        //         shops: updatedShops,
        //     };
        // }
        // case CarShopsTypes.EditCar: {
        //     // через оператор map перебераются объекты из массива state.shops
        //     const updatedShops: ICarShop[] = state.shops.map(shop => {
        //         // если id шопа не совпадает со свойством shopId переданным в action,
        //         // этот шоп возвращается без изменений.
        //         if (shop._id != action.shopId) return shop;
        //         // иначе через оператор map перебираются все объекты из массива shop.cars,
        //         const updatedShopCars: ICar[] = shop.cars.map(
        //             car => {
        //                 //каждая машина проверяется на совпадение со значением из action.carId.
        //                 // если значения разные, то автомобиль возвращается без изменений
        //                 if (car._id != action.carId) return car;
        //                 // иначе возвращается объект нового объекта вида ICar
        //                 // свойство _id берется из исходного объекта,
        //                 // а остальные свойства берутся из переданных значений формы
        //                 return {
        //                     _id: car._id,
        //                     ...action.formValue
        //                 }
        //             }
        //         )
        //         // далее возвращаем объект, в котором распространяем через оператор ...
        //         // все значения перебираемого через MAP шопа, и дополнительно перезаписываем
        //         // имеющееся в нем свойство cars, на свойство cars со значением отфильтрованного
        //         // строкой выше массива
        //         return {
        //             ...shop,
        //             cars: updatedShopCars
        //         };
        //     })
        //     return {
        //         ...state,
        //         shops: updatedShops,
        //     };
        // }
        // case CarShopsTypes.AddCar: {
        //     // через оператор map перебераются объекты из массива state.shops
        //     const updatedShops: ICarShop[] = state.shops.map(shop => {
        //         // если id шопа не совпадает со свойством shopId переданным в action,
        //         // этот шоп возвращается без изменений.
        //         if (shop._id != action.shopId) return shop;
        //         // иначе через оператор concat в массив shop.cars
        //         // добавляются элементы из нового массива,
        //         // со значениями из формы и свойством _id,
        //         // равным длинне массива.
        //         // _id сделаем равным случайному числу из даты в миллисекундах
        //         const idFromDate = new Date().getTime();
        //         const updatedShopCars: ICar[] = shop.cars.concat(
        //             [{...action.formValue, _id: +idFromDate}]
        //         )
        //         // далее возвращаем объект, в котором распространяем через оператор ...
        //         // все значения перебираемого через MAP шопа, и дополнительно перезаписываем
        //         // имеющееся в нем свойство cars, на свойство cars со значением отфильтрованного
        //         // строкой выше массива
        //         return {
        //             ...shop,
        //             cars: updatedShopCars
        //         };
        //     })
        //     console.log(state)
        //     return {
        //         ...state,
        //         shops: updatedShops,
        //     };
        // }
        default: {
            return state;
        }
    }
}

export const getCarsStoreState = createFeatureSelector<CarsState>('cars');
// export const getCarsStoreState = createFeatureSelector<CarsState>('cars');