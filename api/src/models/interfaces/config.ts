import { ICredentials } from './credentials';
/**
 *  config all data
 *
 * @export
 * @interface IConfig
 */
export interface IConfig {
    accounts: IAccountsConfig;
    apiUrl: string;
    baseUrl: string;
    mongo: IMongoConfig;
}

export interface IAccountsConfig {
    service: ICredentials;
    admin: ICredentials;
}

export interface IMongoConfig {
    url: string;
    dbName: string;
}