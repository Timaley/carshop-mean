import { Request } from 'express';
import { Controller, GetRequest, LoggerFactory, PostRequest, PutRequest, DeleteRequest } from 'typespring';
import { Logger } from 'winston';
import { ICarShop } from '../models/interfaces/car-shop';
// import { carShops } from '../models/constants/cars.const';
import { CarsRepository } from '../repository/cars';
import { ICar } from '../models/interfaces/car';

@Controller('/cars')
export class CarsController {
    private _logger: Logger;

    constructor(
        loggerFactory: LoggerFactory,
        private carsRepo: CarsRepository,
    ) {
        this._logger = loggerFactory.getLogger('TEST');
    }

    // @GetRequest('/')
    // async getTest(req: Request): Promise<ICarShop[]> {
    //     this._logger.info('Requesting cars');
    //     // return [];
    //     return carShops;
    // }
    @GetRequest('/')
    async getCars(req: Request): Promise<ICar[]> {
        this._logger.info('Requesting cars');
        // return [];
        // return carShops;
        return await this.carsRepo.getCars();
    }
    @PostRequest('/')
    async addCar(req: Request): Promise<any> {
        // console.log('post ctrl', req.body);
        return await this.carsRepo.addCar(req.body.car, req.body.shopId);
    }

    @PutRequest('/')
    // async addCar(req: Request): Promise<ICar> {

    async editCar(req: Request): Promise<any> {
        // console.log('post ctrl', req.body);
        return await this.carsRepo.editCar(req.body);
    }

    @DeleteRequest('/:id')
    async deleteCar(req: Request): Promise<void> {
        return await this.carsRepo.deleteCar(req.params.id);
    }

}