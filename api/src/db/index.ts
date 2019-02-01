import * as path from 'path';
import * as fs from 'fs';
import { Migrator } from 'ts-migrator';
import { IConfig } from '../models/interfaces/config';
import { ClientsCollection } from './_clients';
import { CarsCollection } from './_cars';
import { ShopsCollection } from './_shops';

export const MIGRATOR_COLLECTIONS = [
    ClientsCollection,
    CarsCollection,
    ShopsCollection,
];

const configFile = fs.readFileSync(path.join(__dirname, '..', '..', 'dist/config.json'));
const config: IConfig = JSON.parse(configFile.toString());

@Migrator({
    mongoUrl: config.mongo.url,
    dbName: config.mongo.dbName,
    collections: MIGRATOR_COLLECTIONS,
})
class AppMigrator {
    // tslint:disable-next-line:no-empty
    run = () => {
    }
}

new AppMigrator().run();