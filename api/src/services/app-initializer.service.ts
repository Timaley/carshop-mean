import { Service, MongoService } from 'typespring';
import { ConfigService } from './convict.service';

@Service()
export class AppInitializerService {
    constructor(
        private config: ConfigService,
        private mongo: MongoService,
    ) {
        this.init();
    }

    init(): void {
        this.mongo.connect({
            url: this.config.mongo.url,
            dbname: this.config.mongo.dbName,
        });
    }
}