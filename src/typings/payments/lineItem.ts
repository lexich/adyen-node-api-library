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


export class LineItem {
    /**
    * Item amount excluding the tax, in minor units.
    */
    'amountExcludingTax'?: number;
    /**
    * Item amount including the tax, in minor units.
    */
    'amountIncludingTax'?: number;
    /**
    * Description of the line item.
    */
    'description'?: string;
    /**
    * ID of the line item.
    */
    'id'?: string;
    /**
    * Number of items.
    */
    'quantity'?: number;
    /**
    * Tax amount, in minor units.
    */
    'taxAmount'?: number;
    /**
    * Tax category: High, Low, None, Zero
    */
    'taxCategory'?: LineItem.TaxCategoryEnum;
    /**
    * Tax percentage, in minor units.
    */
    'taxPercentage'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountExcludingTax",
            "baseName": "amountExcludingTax",
            "type": "number"
        },
        {
            "name": "amountIncludingTax",
            "baseName": "amountIncludingTax",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "taxAmount",
            "baseName": "taxAmount",
            "type": "number"
        },
        {
            "name": "taxCategory",
            "baseName": "taxCategory",
            "type": "LineItem.TaxCategoryEnum"
        },
        {
            "name": "taxPercentage",
            "baseName": "taxPercentage",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return LineItem.attributeTypeMap;
    }
}

export namespace LineItem {
    export enum TaxCategoryEnum {
        High = <any> 'High',
        Low = <any> 'Low',
        None = <any> 'None',
        Zero = <any> 'Zero'
    }
}
