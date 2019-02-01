import { Collections } from '../models/enums/collections';
import { ObjectId } from 'mongodb';
import { MongoService } from 'typespring';
import { Repository } from 'typespring';
import { IClient } from '../models/interfaces/clients';
// import { Client } from '../models/classes/client';
import { ICarShop } from '../models/interfaces/car-shop';

@Repository()
export class ShopsRepository {

    constructor(
        private mongo: MongoService,
    ) { }

    getShops(): Promise<ICarShop[]> {
        return this.mongo.collection(Collections.Shops).find({}).toArray();
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