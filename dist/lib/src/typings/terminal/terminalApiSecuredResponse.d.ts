import { SaleToPOISecuredMessage } from './saleToPOISecuredMessage';
export declare class TerminalApiSecuredResponse {
    'saleToPOIResponse': SaleToPOISecuredMessage;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
