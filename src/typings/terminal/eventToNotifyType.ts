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



export enum EventToNotifyType {
    Abort = "Abort" as any,
    BeginMaintenance = "BeginMaintenance" as any,
    CardInserted = "CardInserted" as any,
    CardRemoved = "CardRemoved" as any,
    Completed = "Completed" as any,
    CustomerLanguage = "CustomerLanguage" as any,
    EndMaintenance = "EndMaintenance" as any,
    Initialised = "Initialised" as any,
    KeyPressed = "KeyPressed" as any,
    OutOfOrder = "OutOfOrder" as any,
    Reject = "Reject" as any,
    SaleAdmin = "SaleAdmin" as any,
    SaleWakeUp = "SaleWakeUp" as any,
    SecurityAlarm = "SecurityAlarm" as any,
    Shutdown = "Shutdown" as any,
    StopAssistance = "StopAssistance" as any
}
