// import { Config, Schema } from 'convict';
// import * as path from 'path';
// import * as convict from 'convict';
// import { IConfig } from '../models/interfaces/config';
// import { Service } from 'typespring';

// @Service()
// export class ConfigService {
//     private config: Config<IConfig>;
//     private default: Schema<IConfig> = {
//         apiUrl: {
//             doc: 'Api url',
//             format: String,
//             default: 'http://localhost:3000/api',
//         },
//         baseUrl: {
//             doc: 'Frontend url',
//             format: String,
//             default: 'http://localhost:8000',
//         },
//     };

//     constructor() {
//         this.config = convict(this.default);
//         this.config.loadFile(path.join(__dirname, 'config.json'));
//         this.config.validate({ allowed: 'strict' });
//     }

//     get apiUrl(): string {
//         return this.config.get('apiUrl');
//     }

//     get baseUrl(): string {
//         return this.config.get('baseUrl');
//     }

// }

import * as convict from 'convict';
import * as path from 'path';
import { IMongoConfig, IAccountsConfig } from '../models/interfaces/config';
import { Service } from 'typespring';

@Service()
export class ConfigService {
    private config;
    private default = {
        apiUrl: {
            doc: 'Api url',
            format: String,
            default: 'http://localhost:3000/api',
        },
        baseUrl: {
            doc: 'Frontend url',
            format: String,
            default: 'http://localhost:8000',
        },
        accounts: {
            admin: {
                username: {
                    doc: 'Admin username',
                    format: String,
                    default: 'admin',
                },
                password: {
                    doc: 'Admin password',
                    format: String,
                    default: '12345',
                },
            },
        },
        mongo: {
            url: {
                doc: 'MongoDB url',
                format: String,
                default: 'mongodb://localhost:27017',
            },
            dbName: {
                doc: 'MongoDB database name',
                format: String,
                default: 'test',
            },
        },
    };

    constructor() {
        this.config = convict(this.default);
        this.config.loadFile(path.join(__dirname, 'config.json'));
        this.config.validate({allowed: 'strict'});
    }

    get apiUrl(): string {
        return this.config.get('apiUrl');
    }

    get baseUrl(): string {
        return this.config.get('baseUrl');
    }

    get accounts(): IAccountsConfig {
        return <IAccountsConfig>this.config.get('accounts');
    }

    get mongo(): IMongoConfig {
        return <IMongoConfig>this.config.get('mongo');
    }
}