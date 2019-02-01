import { ConfigService } from './services/convict.service';
import { Server, bootstrap, LoggerFactory, MongoService } from 'typespring';
import { CarsController } from './controllers/cars';
import { CarsRepository } from './repository/cars';
import { ShopsRepository } from './repository/shops';
import { AppInitializerService } from './services/app-initializer.service';
import { ShopsController } from './controllers/shops';
import { UploaderService } from './services/uploader.service';
import { UploaderController } from './controllers/uploader';
import { FileCleanerService } from './services/file-cleaner.service';

@Server({
    port: PORT,
    cors: true,
    services: [
        ConfigService,
        AppInitializerService,
        LoggerFactory,
        MongoService,
        UploaderService,
        FileCleanerService,
    ],
    controllers: [
        CarsController,
        ShopsController,
        UploaderController,
    ],
    repositories: [
        CarsRepository,
        ShopsRepository,
    ],
})
class AppServer { }

bootstrap(AppServer);