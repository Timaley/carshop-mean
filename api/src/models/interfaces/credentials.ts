import { AccountType } from '../enums/account';

export interface ICredentials {
    username: string;
    password: string;
}

export interface ITokenData {
    accountType: AccountType;
    iat: number;
}
