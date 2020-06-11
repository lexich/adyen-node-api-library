/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AmountsReq } from './amountsReq';
import { OriginalPOITransaction } from './originalPOITransaction';
import { SaleItem } from './saleItem';
import { TransactionConditions } from './transactionConditions';

export class PaymentTransaction {
    'amountsReq': AmountsReq;
    'originalPOITransaction'?: OriginalPOITransaction;
    'saleItem'?: Array<SaleItem>;
    'transactionConditions'?: TransactionConditions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountsReq",
            "baseName": "AmountsReq",
            "type": "AmountsReq"
        },
        {
            "name": "originalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "saleItem",
            "baseName": "SaleItem",
            "type": "Array<SaleItem>"
        },
        {
            "name": "transactionConditions",
            "baseName": "TransactionConditions",
            "type": "TransactionConditions"
        }    ];

    static getAttributeTypeMap() {
        return PaymentTransaction.attributeTypeMap;
    }
}
