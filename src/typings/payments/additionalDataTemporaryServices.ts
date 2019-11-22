/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including One-Click and 3D Secure), mobile wallets, and local payment methods (e.g. iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/checkout).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/user-management/how-to-get-the-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v51/payments ```
 *
 * The version of the OpenAPI document: 51
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class AdditionalDataTemporaryServices {
    /**
    * Customer code, if supplied by a customer. * Encoding: ASCII * maxLength: 25
    */
    'enhancedSchemeDataCustomerReference'?: string;
    /**
    * Total tax amount, in minor units. For example, 2000 means USD 20.00 * maxLength: 12
    */
    'enhancedSchemeDataTotalTaxAmount'?: string;
    /**
    * Name or ID associated with the individual working in a temporary capacity. * maxLength: 40
    */
    'enhancedSchemeDataEmployeeName'?: string;
    /**
    * Description of the job or task of the individual working in a temporary capacity. * maxLength: 40
    */
    'enhancedSchemeDataJobDescription'?: string;
    /**
    * Date for the beginning of the pay period. * Format: ddMMyy * maxLength: 6
    */
    'enhancedSchemeDataTempStartDate'?: string;
    /**
    * Date of the end of the billing cycle. * Format: ddMMyy * maxLength: 6
    */
    'enhancedSchemeDataTempWeekEnding'?: string;
    /**
    * Name of the individual requesting temporary services. * maxLength: 40
    */
    'enhancedSchemeDataRequestName'?: string;
    /**
    * Amount of time worked during a normal operation for the task or job. * maxLength: 7
    */
    'enhancedSchemeDataRegularHoursWorked'?: string;
    /**
    * Amount paid per regular hours worked, minor units. * maxLength: 7
    */
    'enhancedSchemeDataRegularHoursRate'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enhancedSchemeDataCustomerReference",
            "baseName": "enhancedSchemeData.customerReference",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataTotalTaxAmount",
            "baseName": "enhancedSchemeData.totalTaxAmount",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataEmployeeName",
            "baseName": "enhancedSchemeData.employeeName",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataJobDescription",
            "baseName": "enhancedSchemeData.jobDescription",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataTempStartDate",
            "baseName": "enhancedSchemeData.tempStartDate",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataTempWeekEnding",
            "baseName": "enhancedSchemeData.tempWeekEnding",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataRequestName",
            "baseName": "enhancedSchemeData.requestName",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataRegularHoursWorked",
            "baseName": "enhancedSchemeData.regularHoursWorked",
            "type": "string"
        },
        {
            "name": "enhancedSchemeDataRegularHoursRate",
            "baseName": "enhancedSchemeData.regularHoursRate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataTemporaryServices.attributeTypeMap;
    }
}

