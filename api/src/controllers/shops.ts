import { Request } from 'express';
import { Controller, GetRequest, LoggerFactory } from 'typespring';
import { Logger } from 'winston';
import { ICarShop } from '../models/interfaces/car-shop';
// import { carShops } from '../models/constants/cars.const';
import { ShopsRepository } from '../repository/shops';
import { ICar } from '../models/interfaces/car';

@Controller('/shops')
export class ShopsController {
    private _logger: Logger;

    constructor(
        loggerFactory: LoggerFactory,
        private shopsRepo: ShopsRepository,
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
    async getShops(req: Request): Promise<ICarShop[]> {
        this._logger.info('Requesting shops');
        // return [];
        // return carShops;
        return await this.shopsRepo.getShops();
    }

}