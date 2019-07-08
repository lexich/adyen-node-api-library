import { Environment } from "./typings/enums/environment";
interface ConfigConstructor {
    username?: string;
    password?: string;
    merchantAccount?: string;
    environment?: Environment;
    endpoint?: string;
    marketPayEndpoint?: string;
    applicationName?: string;
    apiKey?: string;
    connectionTimeoutMillis?: number;
    readTimeoutMillis?: number;
    certificatePath?: string;
    hppEndpoint?: string;
    skinCode?: string;
    hmacKey?: string;
    checkoutEndpoint?: string;
    terminalApiCloudEndpoint?: string;
    terminalApiLocalEndpoint?: string;
}
declare class Config {
    protected _username: string;
    protected _password: string;
    protected _merchantAccount: string;
    protected _environment: Environment;
    protected _endpoint: string;
    protected _marketPayEndpoint: string;
    protected _applicationName: string;
    protected _apiKey: string;
    protected _connectionTimeoutMillis: number;
    protected _readTimeoutMillis: number;
    protected _certificatePath: string;
    protected _hppEndpoint: string;
    protected _skinCode: string;
    protected _hmacKey: string;
    protected _checkoutEndpoint: string;
    protected _terminalApiCloudEndpoint: string;
    protected _terminalApiLocalEndpoint: string;
    constructor(options?: ConfigConstructor);
    username: string;
    password: string;
    merchantAccount: string;
    environment: Environment;
    endpoint: string;
    marketPayEndpoint: string;
    applicationName: string;
    apiKey: string;
    hppEndpoint: string;
    skinCode: string;
    hmacKey: string;
    checkoutEndpoint: string;
    terminalApiCloudEndpoint: string;
    terminalApiLocalEndpoint: string;
    connectionTimeoutMillis: number;
    readTimeoutMillis: number;
    certificatePath: string;
}
export default Config;