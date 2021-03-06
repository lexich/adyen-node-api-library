
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


declare namespace IPlatformsNotifications {
    export interface AccountCloseNotification {
        /**
         * The details of the Account update.
         */
        content: IPlatformsNotifications.CloseAccountResponse;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface AccountCreateNotification {
        /**
         * The details of the account creation.
         */
        content: IPlatformsNotifications.CreateAccountResponse;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface AccountEvent {
        /**
         * The event.
         * >Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.
         * For more information, refer to [Verification checks](https://docs.adyen.com/marketpay/onboarding-and-verification/verification-checks).
         */
        event: "InactivateAccount" | "RefundNotPaidOutTransfers";
        /**
         * The date on which the event will take place.
         */
        executionDate: string; // date-time
        /**
         * The reason why this event has been created.
         */
        reason: string;
    }
    export interface AccountHolderCreateNotification {
        /**
         * The details of the account holder creation.
         */
        content: IPlatformsNotifications.CreateAccountHolderResponse;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface AccountHolderDetails {
        /**
         * The address of the account holder.
         */
        address?: IPlatformsNotifications.ViasAddress;
        /**
         * Each of the bank accounts associated with the account holder.
         * > Each array entry should represent one bank account.
         * > For comprehensive detail regarding the required `BankAccountDetail` fields, please refer to the [KYC Verification documentation](https://docs.adyen.com/marketpay/onboarding-and-verification/verification-checks).
         */
        bankAccountDetails?: IPlatformsNotifications.BankAccountDetail[];
        /**
         * Details applicable to `Business` legal entities.
         * Populated only if the account holder's legal entity is of type `Business`.
         * > Required when being used in a `/createAccountHolder` request in which the legal entity is `Business`.
         */
        businessDetails?: IPlatformsNotifications.BusinessDetails;
        /**
         * The email address of the account holder.
         */
        email: string;
        /**
         * The phone number of the account holder provided as a single string. It will be handled as a landline phone.
         * **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
         */
        fullPhoneNumber: string;
        /**
         * Details applicable to `Individual` legal entities.
         * Populated only if the account holder's legal entity is of type `Individual`.
         * > Required when being used in a `/createAccountHolder` request in which the legal entity is `Individual`.
         */
        individualDetails?: IPlatformsNotifications.IndividualDetails;
        /**
         * The Merchant Category Code of the account holder.
         * > If not specified in the request, this will be derived from the platform account (which is configured by Adyen).
         */
        merchantCategoryCode?: string;
        /**
         * A set of key and value pairs for general use by the account holder or merchant.
         * The keys do not have specific names and may be used for storing miscellaneous data as desired.
         * > The values being stored have a maximum length of eighty (80) characters and will be truncated if necessary.
         * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
         */
        metadata?: {
        };
        /**
         * Each of the card tokens associated with the account holder.
         * > Each array entry should represent one card token.
         * > For comprehensive detail regarding the required `CardToken` fields, please refer to the [KYC Verification documentation](https://docs.adyen.com/marketpay/onboarding-and-verification/verification-checks).
         */
        payoutMethods?: IPlatformsNotifications.PayoutMethod[];
        /**
         * The URL of the website of the account holder.
         */
        webAddress: string;
    }
    export interface AccountHolderPayoutNotification {
        /**
         * Details of the payout to the Account Holder.
         */
        content: IPlatformsNotifications.AccountHolderPayoutNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface AccountHolderPayoutNotificationContent {
        /**
         * The code of the account from which the payout was made.
         */
        accountCode: string;
        /**
         * The code of the Account Holder to which the payout was made.
         */
        accountHolderCode: string;
        /**
         * The payout amount.
         */
        amount?: IPlatformsNotifications.Amount;
        /**
         * The payout amounts (per currency).
         */
        amounts?: IPlatformsNotifications.Amount[];
        /**
         * Details of the Bank Account to which the payout was made.
         */
        bankAccountDetail?: IPlatformsNotifications.BankAccountDetail;
        /**
         * A description of the payout.
         */
        description?: string;
        /**
         * The estimated date of arrival.
         */
        estimatedArrivalDate?: IPlatformsNotifications.LocalDate;
        /**
         * Invalid fields list.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        /**
         * The merchant reference.
         */
        merchantReference?: string;
        /**
         * The PSP reference of the original payout.
         */
        originalPspReference?: string;
        /**
         * The payout status.
         */
        status?: IPlatformsNotifications.OperationStatus;
    }
    export interface AccountHolderStatus {
        /**
         * A list of events scheduled for the account holder.
         */
        events: IPlatformsNotifications.AccountEvent[];
        /**
         * The payout state of the account holder.
         */
        payoutState: IPlatformsNotifications.AccountPayoutState;
        /**
         * The processing state of the account holder.
         */
        processingState: IPlatformsNotifications.AccountProcessingState;
        /**
         * The status of the account holder.
         * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
         */
        status: "Active" | "Closed" | "Inactive" | "Suspended";
        /**
         * The reason why the status was assigned to the account holder.
         */
        statusReason: string;
    }
    export interface AccountHolderStatusChangeNotification {
        /**
         * The details of the Account Holder status change.
         */
        content?: IPlatformsNotifications.AccountHolderStatusChangeNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface AccountHolderStatusChangeNotificationContent {
        /**
         * The code of the account holder.
         */
        accountHolderCode: string;
        /**
         * in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        /**
         * The new status of the account holder.
         */
        newStatus: IPlatformsNotifications.AccountHolderStatus;
        /**
         * The former status of the account holder.
         */
        oldStatus: IPlatformsNotifications.AccountHolderStatus;
        /**
         * The reason for the status change.
         */
        reason: string;
    }
    export interface AccountHolderStoreStatusChangeNotification {
        /**
         * The details of the Account Holder Store status change.
         */
        content?: IPlatformsNotifications.AccountHolderStoreStatusChangeNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface AccountHolderStoreStatusChangeNotificationContent {
        /**
         * The code of the account holder.
         */
        accountHolderCode: string;
        /**
         * In case the store status has not been updated, contains fields that did not pass the validation.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        /**
         * The new status of the account holder.
         */
        newStatus: "Active" | "Closed" | "Inactive" | "InactiveWithModifications" | "Pending";
        /**
         * The former status of the account holder.
         */
        oldStatus: "Active" | "Closed" | "Inactive" | "InactiveWithModifications" | "Pending";
        /**
         * The reason for the status change.
         */
        reason: string;
        /**
         * Alphanumeric identifier of the store.
         */
        store: string;
        /**
         * Store store reference.
         */
        storeReference: string;
    }
    export interface AccountHolderUpcomingDeadlineNotification {
        /**
         * The details of the upcoming event.
         */
        content?: IPlatformsNotifications.AccountHolderUpcomingDeadlineNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface AccountHolderUpcomingDeadlineNotificationContent {
        /**
         * The code of the account holder whom the event refers to.
         */
        accountHolderCode?: string;
        /**
         * The event name that will be trigger if no action is taken.
         */
        event?: "AccessPii" | "CloseAccount" | "CloseStores" | "DeleteBankAccounts" | "DeletePayoutInstrumentTokens" | "DeletePayoutMethods" | "DeleteShareholders" | "InactivateAccount" | "RecalculateAccountStatusAndProcessingTier" | "RefundNotPaidOutTransfers" | "ResolveEvents" | "SaveAccountHolder" | "SaveKYCCheckStatus" | "SuspendAccount" | "UnSuspendAccount" | "UpdateAccountHolderState" | "Verification";
        /**
         * The execution date scheduled for the event.
         */
        executionDate?: IPlatformsNotifications.LocalDate;
        /**
         * The reason that leads to scheduling of the event.
         */
        reason?: string;
    }
    export interface AccountHolderUpdateNotification {
        /**
         * The details of the Account Holder update.
         */
        content: IPlatformsNotifications.UpdateAccountHolderResponse;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface AccountHolderVerificationNotification {
        /**
         * The details of the Account Holder verification.
         */
        content: IPlatformsNotifications.AccountHolderVerificationNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface AccountHolderVerificationNotificationContent {
        /**
         * The code of the account holder.
         */
        accountHolderCode: string;
        /**
         * The unique ID of the bank account that has been verified.
         */
        bankAccountUUID?: string;
        /**
         * Information on the verification status
         */
        kycCheckStatusData?: IPlatformsNotifications.KYCCheckStatusData;
        /**
         * The code of the shareholder that has been verified.
         */
        shareholderCode?: string;
    }
    export interface AccountPayoutState {
        /**
         * Indicates whether payouts are allowed. This field is the overarching payout status, and is the aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is false, no payouts will be permitted for any of the account holder's accounts. If this field is true, payouts will be permitted for any of the account holder's accounts.
         */
        allowPayout: boolean;
        /**
         * The reason why payouts (to all of the account holder's accounts) have been disabled (by the platform). If the `disabled` field is true, this field can be used to explain why.
         */
        disableReason: string;
        /**
         * Indicates whether payouts have been disabled (by the platform) for all of the account holder's accounts. A platform may enable and disable this field at their discretion. If this field is true, `allowPayout` will be false and no payouts will be permitted for any of the account holder's accounts. If this field is false, `allowPayout` may or may not be enabled, depending on other factors.
         */
        disabled: boolean;
        /**
         * The reason why payouts (to all of the account holder's accounts) have been disabled (by Adyen). If payouts have been disabled by Adyen, this field will explain why. If this field is blank, payouts have not been disabled by Adyen.
         */
        notAllowedReason: string;
        /**
         * The maximum amount that payouts are limited to. Only applies if payouts are allowed but limited.
         */
        payoutLimit: IPlatformsNotifications.Amount;
        /**
         * The payout tier that the account holder occupies.
         */
        tierNumber: number; // int32
    }
    export interface AccountProcessingState {
        /**
         * The reason why processing has been disabled.
         */
        disableReason: string;
        /**
         * Indicates whether the processing of payments is allowed.
         */
        disabled: boolean;
        /**
         * The lower bound of the processing tier (i.e., an account holder must have processed at least this amount of money in order to be placed into this tier).
         */
        processedFrom: IPlatformsNotifications.Amount;
        /**
         * The upper bound of the processing tier (i.e., an account holder must have processed less than this amount of money in order to be placed into this tier).
         */
        processedTo: IPlatformsNotifications.Amount;
        /**
         * The processing tier that the account holder occupies.
         */
        tierNumber: number; // int32
    }
    export interface AccountUpdateNotification {
        /**
         * The details of the Account update.
         */
        content: IPlatformsNotifications.UpdateAccountResponse;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface Amount {
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
         */
        currency: string;
        /**
         * The payable amount that can be charged for the transaction.
         *
         * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
         */
        value: number; // int64
    }
    export interface BankAccountDetail {
        /**
         * The bank account number (without separators).
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        accountNumber?: string;
        /**
         * The type of bank account.
         * Only applicable to bank accounts held in the USA.
         * The permitted values are: `checking`, `savings`.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        accountType?: string;
        /**
         * The name of the bank account.
         */
        bankAccountName?: string;
        /**
         * Merchant reference to the bank account.
         */
        bankAccountReference?: string;
        /**
         * The unique identifier (UUID) of the Bank Account.
         * >If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.
         *
         * >If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.
         *
         * >If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.
         *
         * >If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated.
         *
         */
        bankAccountUUID?: string;
        /**
         * The bank identifier code.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        bankBicSwift?: string;
        /**
         * The city in which the bank branch is located.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        bankCity?: string;
        /**
         * The bank code of the banking institution with which the bank account is registered.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        bankCode?: string;
        /**
         * The name of the banking institution with which the bank account is held.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        bankName?: string;
        /**
         * The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:
         * * United States - Routing number
         * * United Kingdom - Sort code
         * * Germany - Bankleitzahl
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        branchCode?: string;
        /**
         * The check code of the bank account.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        checkCode?: string;
        /**
         * The two-letter country code in which the bank account is registered.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        countryCode?: string;
        /**
         * The currency in which the bank account deals.
         * >The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        currencyCode?: string;
        /**
         * The international bank account number.
         * >The IBAN standard is defined in ISO-13616.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        iban?: string;
        /**
         * The city of residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerCity?: string;
        /**
         * The country code of the country of residence of the bank account owner.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerCountryCode?: string;
        /**
         * The date of birth of the bank account owner.
         *
         */
        ownerDateOfBirth?: string;
        /**
         * The house name or number of the residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerHouseNumberOrName?: string;
        /**
         * The name of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerName?: string;
        /**
         * The country code of the country of nationality of the bank account owner.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerNationality?: string;
        /**
         * The postal code of the residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerPostalCode?: string;
        /**
         * The state of residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerState?: string;
        /**
         * The street name of the residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerStreet?: string;
        /**
         * If set to true, the bank account is a primary account.
         */
        primaryAccount?: boolean;
        /**
         * The tax ID number.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        taxId?: string;
        /**
         * The URL to be used for bank account verification.
         * This may be generated on bank account creation.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        urlForVerification?: string;
    }
    export interface BeneficiarySetupNotification {
        /**
         * Details of the beneficiary setup.
         */
        content: IPlatformsNotifications.BeneficiarySetupNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface BeneficiarySetupNotificationContent {
        /**
         * The code of the beneficiary account.
         */
        destinationAccountCode: string;
        /**
         * The code of the beneficiary Account Holder.
         */
        destinationAccountHolderCode: string;
        /**
         * A listing of the invalid fields which have caused the Setup Beneficiary request to fail. If this is empty, the Setup Beneficiary request has succeeded.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        /**
         * The reference provided by the merchant.
         */
        merchantReference?: string;
        /**
         * The code of the benefactor account.
         */
        sourceAccountCode: string;
        /**
         * The code of the benefactor Account Holder.
         */
        sourceAccountHolderCode: string;
        /**
         * The date on which the beneficiary was set up and funds transferred from benefactor to beneficiary.
         */
        transferDate: string; // date-time
    }
    export interface BusinessDetails {
        /**
         * The registered name of the company (if it differs from the legal name of the company).
         */
        doingBusinessAs?: string;
        /**
         * The legal name of the company.
         */
        legalBusinessName?: string;
        /**
         * The registration number of the company.
         */
        registrationNumber?: string;
        /**
         * Each of the shareholders associated with the company.
         * Each array entry should represent one shareholder.
         */
        shareholders?: IPlatformsNotifications.ShareholderContact[];
        /**
         * The tax ID of the company.
         */
        taxId?: string;
    }
    export interface CloseAccountResponse {
        /**
         * The account code of the account that is closed.
         */
        accountCode?: string;
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * The new status of the account.
         * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
         */
        status: "Active" | "Closed" | "Inactive" | "Suspended";
    }
    export interface CompensateNegativeBalanceNotification {
        /**
         * Details of the negative balance compensation.
         */
        content?: IPlatformsNotifications.CompensateNegativeBalanceNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface CompensateNegativeBalanceNotificationContent {
        /**
         * A list of the negative balances compensated.
         */
        records: IPlatformsNotifications.CompensateNegativeBalanceNotificationRecord[];
    }
    export interface CompensateNegativeBalanceNotificationRecord {
        /**
         * The code of the account whose negative balance has been compensated.
         */
        accountCode: string;
        /**
         * The amount compensated.
         */
        amount: IPlatformsNotifications.Amount;
        /**
         * The date on which the compensation took place.
         */
        transferDate: string; // date-time
    }
    export interface CreateAccountHolderResponse {
        /**
         * The code of a new account created for the account holder.
         */
        accountCode?: string;
        /**
         * The code of the new account holder.
         */
        accountHolderCode: string;
        /**
         * Details of the new account holder.
         */
        accountHolderDetails: IPlatformsNotifications.AccountHolderDetails;
        /**
         * The status of the new account holder.
         */
        accountHolderStatus: IPlatformsNotifications.AccountHolderStatus;
        /**
         * The description of the new account holder.
         */
        description?: string;
        /**
         * A list of fields that caused the `/createAccountHolder` request to fail.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        /**
         * The type of legal entity of the new account holder.
         */
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
         */
        primaryCurrency?: string;
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * The details of KYC Verification of the account holder.
         */
        verification: IPlatformsNotifications.KYCVerificationResult;
    }
    export interface CreateAccountResponse {
        /**
         * The code of the new account.
         */
        accountCode: string;
        /**
         * The code of the account holder.
         */
        accountHolderCode: string;
        /**
         * The description of the account.
         */
        description?: string;
        /**
         * A list of fields that caused the `/createAccount` request to fail.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        metadata?: {
            [name: string]: string;
        };
        /**
         * The payout schedule of the account.
         */
        payoutSchedule?: IPlatformsNotifications.PayoutScheduleResponse;
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * The status of the account.
         * >Permitted values: `Active`.
         */
        status: "Active" | "Closed" | "Inactive" | "Suspended";
    }
    export interface DirectDebitInitiatedNotification {
        /**
         * Details of the direct debit.
         */
        content?: IPlatformsNotifications.DirectDebitInitiatedNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface DirectDebitInitiatedNotificationContent {
        /**
         * The code of the account.
         */
        accountCode: string;
        /**
         * The amount to be debited from the funding account.
         */
        amount: IPlatformsNotifications.Amount;
        /**
         * The date of the debit initiation.
         */
        debitInitiationDate?: IPlatformsNotifications.LocalDate;
        /**
         * The code of the merchant account.
         */
        merchantAccountCode: string;
        /**
         * Direct debit status.
         */
        status?: IPlatformsNotifications.OperationStatus;
    }
    export interface ErrorFieldType {
        /**
         * The validation error code.
         */
        errorCode?: number; // int32
        /**
         * A description of the validation error.
         */
        errorDescription?: string;
        /**
         * The type of error field.
         */
        fieldType?: IPlatformsNotifications.FieldType;
    }
    export interface FieldType {
        /**
         * The full name of the property.
         */
        field?: string;
        /**
         * The type of the field.
         */
        fieldName?: "accountCode" | "accountHolderCode" | "accountHolderDetails" | "accountNumber" | "accountStateType" | "accountStatus" | "accountType" | "address" | "bankAccount" | "bankAccountCode" | "bankAccountName" | "bankAccountUUID" | "bankBicSwift" | "bankCity" | "bankCode" | "bankName" | "bankStatement" | "branchCode" | "businessContact" | "cardToken" | "checkCode" | "city" | "companyRegistration" | "country" | "countryCode" | "currency" | "currencyCode" | "dateOfBirth" | "description" | "destinationAccountCode" | "document" | "documentExpirationDate" | "documentIssuerCountry" | "documentIssuerState" | "documentName" | "documentNumber" | "documentType" | "doingBusinessAs" | "drivingLicence" | "drivingLicenceBack" | "drivingLicense" | "email" | "firstName" | "fullPhoneNumber" | "gender" | "hopWebserviceUser" | "houseNumberOrName" | "iban" | "idCard" | "idCardBack" | "idCardFront" | "idNumber" | "identityDocument" | "individualDetails" | "lastName" | "legalBusinessName" | "legalEntity" | "legalEntityType" | "merchantAccount" | "merchantCategoryCode" | "merchantReference" | "microDeposit" | "name" | "nationality" | "originalReference" | "ownerCity" | "ownerCountryCode" | "ownerHouseNumberOrName" | "ownerName" | "ownerPostalCode" | "ownerState" | "ownerStreet" | "passport" | "passportNumber" | "payoutMethodCode" | "personalData" | "phoneCountryCode" | "phoneNumber" | "postalCode" | "primaryCurrency" | "reason" | "registrationNumber" | "returnUrl" | "schedule" | "shareholder" | "shareholderCode" | "socialSecurityNumber" | "sourceAccountCode" | "stateOrProvince" | "status" | "store" | "storeDetail" | "storeName" | "storeReference" | "street" | "taxId" | "tier" | "tierNumber" | "transferCode" | "unknown" | "value" | "virtualAccount" | "visaNumber" | "webAddress";
        /**
         * The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.
         */
        shareholderCode?: string;
    }
    export interface IndividualDetails {
        /**
         * The name of the individual.
         * >Make sure your account holder registers using the name shown on their Photo ID.
         */
        name?: IPlatformsNotifications.ViasName;
        /**
         * Personal information of the individual.
         */
        personalData?: IPlatformsNotifications.ViasPersonalData;
    }
    export interface KYCBankAccountCheckResult {
        /**
         * The unique ID of the bank account to which the check applies.
         */
        bankAccountUUID: string;
        /**
         * A list of the checks and their statuses.
         */
        checks: IPlatformsNotifications.KYCCheckStatusData[];
    }
    export interface KYCCheckResult {
        /**
         * A list of the checks and their statuses.
         */
        checks: IPlatformsNotifications.KYCCheckStatusData[];
    }
    export interface KYCCheckStatusData {
        /**
         * A list of the fields required for execution of the check.
         */
        requiredFields: string[];
        /**
         * The status of the check.
         * >Permitted Values: `DATA_PROVIDED`, `PASSED`, `PENDING`, `AWAITING_DATA`, `RETRY_LIMIT_REACHED`, `INVALID_DATA`, `FAILED`.
         */
        status: "AWAITING_DATA" | "DATA_PROVIDED" | "FAILED" | "INVALID_DATA" | "PASSED" | "PENDING" | "PENDING_REVIEW" | "RETRY_LIMIT_REACHED" | "UNCHECKED";
        /**
         * A summary of the execution of the check.
         */
        summary: IPlatformsNotifications.KYCCheckSummary;
        /**
         * The type of check.
         * >Permitted Values: `COMPANY_VERIFICATION`, `IDENTITY_VERIFICATION`, `PASSPORT_VERIFICATION`, `BANK_ACCOUNT_VERIFICATION`, `NONPROFIT_VERIFICATION`.
         */
        type: "BANK_ACCOUNT_VERIFICATION" | "COMPANY_VERIFICATION" | "IDENTITY_VERIFICATION" | "NONPROFIT_VERIFICATION" | "PASSPORT_VERIFICATION";
    }
    export interface KYCCheckSummary {
        /**
         * The code of the check.
         */
        kycCheckCode?: number; // int32
        /**
         * A description of the check.
         */
        kycCheckDescription?: string;
    }
    export interface KYCShareholderCheckResult {
        /**
         * A list of the checks and their statuses.
         */
        checks: IPlatformsNotifications.KYCCheckStatusData[];
        /**
         * The code of the shareholder to which the check applies.
         */
        shareholderCode: string;
    }
    export interface KYCVerificationResult {
        /**
         * The result(s) of the checks on the account holder.
         */
        accountHolder: IPlatformsNotifications.KYCCheckResult;
        /**
         * The result(s) of the checks on the bank account(s).
         */
        bankAccounts: IPlatformsNotifications.KYCBankAccountCheckResult[];
        /**
         * The result(s) of the checks on the shareholder(s).
         */
        shareholders: IPlatformsNotifications.KYCShareholderCheckResult[];
    }
    export interface LocalDate {
        month?: number; // int32
        year?: number; // int32
    }
    export interface Message {
        /**
         * The message code.
         */
        code?: string;
        /**
         * The message text.
         */
        text?: string;
    }
    export interface NotificationErrorContainer {
        /**
         * The Adyen code that is mapped to the error message.
         */
        errorCode?: string;
        /**
         * A short explanation of the issue.
         */
        message?: string;
    }
    export interface NotificationResponse {
        /**
         * Set this property to **[accepted]** to acknowledge that you received a notification from Adyen.
         */
        notificationResponse: string;
    }
    export interface OperationStatus {
        /**
         * The message regarding the operation status.
         */
        message?: IPlatformsNotifications.Message;
        /**
         * The status code.
         */
        statusCode?: string;
    }
    export interface PaymentFailureNotification {
        /**
         * The details of the payment failure.
         */
        content: IPlatformsNotifications.PaymentFailureNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface PaymentFailureNotificationContent {
        /**
         * Missing or invalid fields that caused the payment error.
         */
        errorFields: IPlatformsNotifications.ErrorFieldType[];
        /**
         * The error message.
         */
        errorMessage: IPlatformsNotifications.Message;
    }
    export interface PayoutMethod {
        merchantAccount: string;
        payoutMethodCode?: string;
        payoutMethodType?: "CardToken";
        recurringDetailReference: string;
        shopperReference: string;
    }
    export interface PayoutScheduleResponse {
        /**
         * The date of the next scheduled payout.
         */
        nextScheduledPayout: string; // date-time
        /**
         * The payout schedule of the account.
         * >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
         */
        schedule: "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT" | "BIWEEKLY_ON_1ST_AND_15TH_AT_NOON" | "DAILY" | "DAILY_6PM" | "DAILY_AU" | "DAILY_EU" | "DAILY_US" | "DEFAULT" | "EVERY_6_HOURS_FROM_MIDNIGHT" | "HOLD" | "MONTHLY" | "WEEKLY" | "WEEKLY_ON_TUE_FRI_MIDNIGHT" | "YEARLY";
    }
    export interface PersonalDocumentData {
        /**
         * The expiration date of the document.
         * The date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).
         */
        expirationDate?: string;
        /**
         * The two-character country code of the issuer.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         */
        issuerCountry?: string;
        /**
         * The state issued the document (if applicable)
         */
        issuerState?: string;
        /**
         * The number of the document. Delete the given type if the value empty.
         */
        number: string;
        /**
         * The type of the document. More then one item pert type does not allowed.
         * Valid values: ID, PASSPORT, VISA, DRIVINGLICENSE
         */
        type: "DRIVINGLICENSE" | "ID" | "PASSPORT" | "SOCIALSECURITY" | "VISA";
    }
    namespace Post {
        export type RequestBody = IPlatformsNotifications.TransferFundsNotification;
        namespace Responses {
            export type $200 = IPlatformsNotifications.NotificationResponse;
        }
    }
    export interface RefundFundsTransferNotification {
        /**
         * Details of the fund transfer refund.
         */
        content: IPlatformsNotifications.RefundFundsTransferNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface RefundFundsTransferNotificationContent {
        /**
         * The amount to be refunded.
         */
        amount: IPlatformsNotifications.Amount;
        /**
         * Invalid fields list.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        /**
         * A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
         */
        merchantReference?: string;
        /**
         * A PSP reference of the original fund transfer.
         */
        originalReference: string;
        /**
         * The status of the fund transfer refund.
         */
        status?: IPlatformsNotifications.OperationStatus;
    }
    export interface RefundResult {
        /**
         * The transaction that has been refunded.
         */
        originalTransaction: IPlatformsNotifications.Transaction;
        /**
         * The reference of the refund.
         */
        pspReference: string;
        /**
         * The response indicating if the refund has been received for processing.
         */
        response?: string;
    }
    export interface ReportAvailableNotification {
        /**
         * Details of the report.
         */
        content: IPlatformsNotifications.ReportAvailableNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface ReportAvailableNotificationContent {
        /**
         * The code of the Account to which the report applies.
         */
        accountCode?: string;
        /**
         * The type of Account to which the report applies.
         */
        accountType?: string;
        /**
         * The date of the event to which the report applies.
         */
        eventDate?: string; // date-time
        /**
         * The URL at which the report can be accessed.
         */
        remoteAccessUrl?: string;
        /**
         * Indicates whether the event resulted in a success.
         */
        success?: boolean;
    }
    export interface ScheduledRefundsNotification {
        /**
         * Details of the scheduling of the refunds.
         */
        content: IPlatformsNotifications.ScheduledRefundsNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface ScheduledRefundsNotificationContent {
        /**
         * The code of the account.
         */
        accountCode: string;
        /**
         * The code of the Account Holder.
         */
        accountHolderCode: string;
        /**
         * Invalid fields list.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        /**
         * The most recent payout (after which all transactions were scheduled to be refunded).
         */
        lastPayout: IPlatformsNotifications.Transaction;
        /**
         * A list of the refunds that have been scheduled and their results.
         */
        refundResults: IPlatformsNotifications.RefundResult[];
    }
    export interface ShareholderContact {
        /**
         * The address of the contact.
         */
        address?: IPlatformsNotifications.ViasAddress;
        /**
         * The e-mail address of the contact.
         */
        email?: string;
        /**
         * The phone number of the contact provided as a single string.  It will be handled as a landline phone.
         * **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
         */
        fullPhoneNumber?: string;
        /**
         * The name of the contact.
         */
        name?: IPlatformsNotifications.ViasName;
        /**
         * Personal data of the Shareholder.
         */
        personalData?: IPlatformsNotifications.ViasPersonalData;
        /**
         * The phone number of the contact.
         */
        phoneNumber?: IPlatformsNotifications.ViasPhoneNumber;
        /**
         * The unique identifier (UUID) of the Shareholder.
         * >**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**
         *
         * >**If, during an Account Holder create request, a UUID is provided, the creation of the Shareholder will fail while the creation of the Account Holder will continue.**
         *
         * >**If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**
         *
         * >**If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.**
         *
         */
        shareholderCode?: string;
        /**
         * Merchant reference to the Shareholder.
         */
        shareholderReference?: string;
        /**
         * The URL of the website of the contact.
         */
        webAddress?: string;
    }
    export interface Transaction {
        /**
         * The amount of the transaction.
         */
        amount?: IPlatformsNotifications.Amount;
        /**
         * The details of the bank account to where a payout was made.
         */
        bankAccountDetail?: IPlatformsNotifications.BankAccountDetail;
        /**
         * The merchant reference of a related capture.
         */
        captureMerchantReference?: string;
        /**
         * The psp reference of a related capture.
         */
        capturePspReference?: string;
        /**
         * The date on which the transaction was performed.
         */
        creationDate?: string; // date-time
        /**
         * A description of the transaction.
         */
        description?: string;
        /**
         * The code of the account to which funds were credited during an outgoing fund transfer.
         */
        destinationAccountCode?: string;
        /**
         * The psp reference of the related dispute.
         */
        disputePspReference?: string;
        /**
         * The reason code of a dispute.
         */
        disputeReasonCode?: string;
        /**
         * The merchant reference of a transaction.
         */
        merchantReference?: string;
        /**
         * The psp reference of the related authorisation or transfer.
         */
        paymentPspReference?: string;
        /**
         * The psp reference of the related payout.
         */
        payoutPspReference?: string;
        /**
         * The psp reference of a transaction.
         */
        pspReference?: string;
        /**
         * The code of the account from which funds were debited during an incoming fund transfer.
         */
        sourceAccountCode?: string;
        /**
         * The status of the transaction.
         * >Permitted values: `PendingCredit`, `CreditFailed`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`.
         */
        transactionStatus?: "Chargeback" | "ChargebackCorrection" | "ChargebackCorrectionReceived" | "ChargebackReceived" | "ChargebackReversed" | "ChargebackReversedReceived" | "Converted" | "CreditFailed" | "CreditReversed" | "CreditReversedReceived" | "Credited" | "DebitFailed" | "DebitReversedReceived" | "Debited" | "DebitedReversed" | "Fee" | "FundTransfer" | "FundTransferReversed" | "ManualCorrected" | "Payout" | "PayoutReversed" | "PendingCredit" | "PendingDebit" | "PendingFundTransfer" | "SecondChargeback" | "SecondChargebackReceived";
        /**
         * The transfer code of the transaction.
         */
        transferCode?: string;
    }
    export interface TransferFundsNotification {
        /**
         * Details of the fund transfer.
         */
        content: IPlatformsNotifications.TransferFundsNotificationContent;
        /**
         * Error information of failed request. No value provided here if no error occurred on processing.
         */
        error?: IPlatformsNotifications.NotificationErrorContainer;
        /**
         * The date and time when an event has been completed.
         */
        eventDate: string; // date-time
        /**
         * The event type of the notification.
         */
        eventType: string;
        /**
         * The user or process that has triggered the notification.
         */
        executingUserKey: string;
        /**
         * Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.
         */
        live: boolean;
        /**
         * The PSP reference of the request from which the notification originates.
         */
        pspReference: string;
    }
    export interface TransferFundsNotificationContent {
        /**
         * The amount transferred.
         */
        amount: IPlatformsNotifications.Amount;
        /**
         * The code of the Account to which funds were credited.
         */
        destinationAccountCode: string;
        /**
         * Invalid fields list.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        /**
         * The reference provided by the merchant.
         */
        merchantReference?: string;
        /**
         * The code of the Account from which funds were debited.
         */
        sourceAccountCode: string;
        /**
         * The status of the fund transfer.
         */
        status?: IPlatformsNotifications.OperationStatus;
        /**
         * The transfer code.
         */
        transferCode: string;
    }
    export interface UpdateAccountHolderResponse {
        /**
         * The code of the account holder.
         */
        accountHolderCode?: string;
        /**
         * Details of the account holder.
         */
        accountHolderDetails?: IPlatformsNotifications.AccountHolderDetails;
        /**
         * The new status of the account holder.
         */
        accountHolderStatus: IPlatformsNotifications.AccountHolderStatus;
        /**
         * The description of the account holder.
         */
        description?: string;
        /**
         * in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        /**
         * The legal entity of the account holder.
         */
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
         */
        primaryCurrency?: string;
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * The details of KYC Verification of the account holder.
         */
        verification: IPlatformsNotifications.KYCVerificationResult;
    }
    export interface UpdateAccountResponse {
        /**
         * The code of the account.
         */
        accountCode: string;
        /**
         * The description of the account.
         */
        description?: string;
        /**
         * A list of fields that caused the `/updateAccount` request to fail.
         */
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        metadata?: {
            [name: string]: string;
        };
        /**
         * The payout schedule of the account.
         */
        payoutSchedule: IPlatformsNotifications.PayoutScheduleResponse;
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface ViasAddress {
        /**
         * The name of the city.
         * >Required if either `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.
         */
        city?: string;
        /**
         * The two-character country code of the address. The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         * > If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.
         */
        country: string;
        /**
         * The number or name of the house.
         */
        houseNumberOrName?: string;
        /**
         * The postal code.
         * >A maximum of five (5) digits for an address in the USA, or a maximum of ten (10) characters for an address in all other countries.
         * >Required if either `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.
         */
        postalCode?: string;
        /**
         * The abbreviation of the state or province.
         * >Two (2) characters for an address in the USA or Canada, or a maximum of three (3) characters for an address in all other countries.
         * >Required for an address in the USA or Canada if either `houseNumberOrName`, `street`, `city`, or `postalCode` are provided.
         */
        stateOrProvince?: string;
        /**
         * The name of the street.
         * >The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.
         * >Required if either `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.
         */
        street?: string;
    }
    export interface ViasName {
        /**
         * The first name.
         */
        firstName: string;
        /**
         * The gender.
         * >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.
         */
        gender: "MALE" | "FEMALE" | "UNKNOWN";
        /**
         * The name's infix, if applicable.
         * >A maximum length of twenty (20) characters is imposed.
         */
        infix?: string;
        /**
         * The last name.
         */
        lastName: string;
    }
    export interface ViasPersonalData {
        /**
         * The date of birth of the person.
         * The date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).
         */
        dateOfBirth?: string;
        /**
         * Key value pairs of document type and identify numbers
         */
        documentData?: IPlatformsNotifications.PersonalDocumentData[];
        /**
         * The nationality of the person represented by a two-character country code.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         */
        nationality?: string;
    }
    export interface ViasPhoneNumber {
        /**
         * The two-character country code of the phone number.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         */
        phoneCountryCode: string;
        /**
         * The phone number.
         * >The inclusion of the phone number country code is not necessary.
         */
        phoneNumber: string;
        /**
         * The type of the phone number.
         * >The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.
         */
        phoneType?: "Fax" | "Landline" | "Mobile" | "SIP";
    }
}
