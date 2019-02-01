import { Collections } from '../models/enums/collections';
import { ObjectId } from 'mongodb';
import { MongoService } from 'typespring';
import { Repository } from 'typespring';
import { ICar } from '../models/interfaces/car';
import assert = require('assert');

@Repository()
export class CarsRepository {

    constructor(
        private mongo: MongoService,
    ) { }

    async getCars(): Promise<ICar[]> {
        return this.mongo.collection(Collections.Cars).find({}).toArray();
    }

    async addCar(car, shopId): Promise<any> {
        const newCar = await this.mongo.collection(Collections.Cars).insertOne(car);
        assert.equal(newCar.insertedCount, 1, 'addCar insert error');

        const update = await this.mongo.collection(Collections.Shops)
            .updateOne(
                { _id: new ObjectId(shopId) },
                { $addToSet: { cars: newCar.insertedId } },
            );
        assert.equal(update.modifiedCount, 1, 'addCar update error');
        return newCar.insertedId;
    }

    async editCar(car): Promise<any> {
        console.log('car', car);
        const carId = new ObjectId(car._id);
        delete car._id;
        const x = await this.mongo.collection(Collections.Cars).replaceOne(
            { _id: carId },
            { ...car },
        );
        assert.equal(x.modifiedCount, 1, 'editCar update error');
        console.log(x.result);
        return x.result;
    }

    async deleteCar(carId): Promise<void> {
        const id = new ObjectId(carId);
        await this.mongo.collection(Collections.Cars).deleteOne({ _id: id });
        await this.mongo.collection(Collections.Shops).updateOne(
            { cars: { $all: [id] } },
            { $pull: { cars: id } },
        );
    }

    // async getClientClients(): Promise<IClient[]> {
    //     return this.mongo.collection(Collections.Clients).find(
    //         { isVisible: true },
    //     ).project(
    //         { isVisible: 0, _id: 0 },
    //     ).toArray();
    // }

    // async createClient(): Promise<IClient> {
    //     const client = new Client();
    //     const r = await this.mongo.collection(Collections.Clients).insertOne(client);
    //     client._id = r.insertedId;
    //     return client;
    // }

    // async updateClient(item: IClient): Promise<void> {
    //     const id = item._id;
    //     delete item._id;
    //     await this.mongo.collection(Collections.Clients).replaceOne({ _id: new ObjectId(id) }, item);
    // }

    // async deleteClient(id: string): Promise<void> {
    //     await this.mongo.collection(Collections.Clients).deleteOne({ _id: new ObjectId(id) });
    // }
}