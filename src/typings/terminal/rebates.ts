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


import { SaleItemRebate } from './saleItemRebate';

export class Rebates {
    'rebateLabel'?: string;
    'saleItemRebate'?: Array<SaleItemRebate>;
    'totalRebate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rebateLabel",
            "baseName": "RebateLabel",
            "type": "string"
        },
        {
            "name": "saleItemRebate",
            "baseName": "SaleItemRebate",
            "type": "Array<SaleItemRebate>"
        },
        {
            "name": "totalRebate",
            "baseName": "TotalRebate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Rebates.attributeTypeMap;
    }
}
