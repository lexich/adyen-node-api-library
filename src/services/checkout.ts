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

import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import PaymentMethods from "./resource/checkout/paymentMethods";
import Payments from "./resource/checkout/payments";
import PaymentsDetails from "./resource/checkout/paymentsDetails";
import PaymentSession from "./resource/checkout/paymentSession";
import PaymentsResult from "./resource/checkout/paymentsResult";
import PaymentLinks from "./resource/checkout/paymentLinks";
import OriginKeys from "./resource/checkout/originKeys";
import setApplicationInfo from "../helpers/setApplicationInfo";
import { IRequest } from "../typings/requestOptions";
import PaymentLinksId from "./resource/checkout/paymentLinksId";
import PaymentMethodsBalance from "./resource/checkout/paymentMethodsBalance";
import Orders from "./resource/checkout/orders";
import OrdersCancel from "./resource/checkout/ordersCancel";

class Checkout extends ApiKeyAuthenticatedService {
    private readonly _payments: Payments;
    private readonly _paymentMethods: PaymentMethods;
    private readonly _paymentsDetails: PaymentsDetails;
    private readonly _paymentSession: PaymentSession;
    private readonly _paymentsResult: PaymentsResult;
    private readonly _paymentLinks: PaymentLinks;
    private readonly _paymentLinksId: PaymentLinksId;
    private readonly _originKeys: OriginKeys;
    private readonly _paymentMethodsBalance: PaymentMethodsBalance;
    private readonly _orders: Orders;
    private readonly _ordersCancel: OrdersCancel;

    public constructor(client: Client) {
        super(client);
        this._payments = new Payments(this);
        this._paymentMethods = new PaymentMethods(this);
        this._paymentsDetails = new PaymentsDetails(this);
        this._paymentSession = new PaymentSession(this);
        this._paymentsResult = new PaymentsResult(this);
        this._paymentLinks = new PaymentLinks(this);
        this._paymentLinksId = new PaymentLinksId(this);
        this._originKeys = new OriginKeys(this);
        this._paymentMethodsBalance = new PaymentMethodsBalance(this);
        this._orders = new Orders(this);
        this._ordersCancel = new OrdersCancel(this);
    }

    public payments(paymentsRequest: ICheckout.PaymentRequest, requestOptions?: IRequest.Options): Promise<ICheckout.PaymentResponse> {
        return getJsonResponse<ICheckout.PaymentRequest, ICheckout.PaymentResponse>(
            this._payments,
            setApplicationInfo(paymentsRequest),
            requestOptions,
        );
    }

    public paymentMethods(paymentMethodsRequest: ICheckout.PaymentMethodsRequest): Promise<ICheckout.PaymentMethodsResponse> {
        return getJsonResponse<ICheckout.PaymentMethodsRequest, ICheckout.PaymentMethodsResponse>(
            this._paymentMethods,
            paymentMethodsRequest,
        );
    }

    public paymentLinks(paymentLinkRequest: ICheckout.CreatePaymentLinkRequest): Promise<ICheckout.PaymentLinkResource> {
        return getJsonResponse<ICheckout.CreatePaymentLinkRequest, ICheckout.PaymentLinkResource>(
            this._paymentLinks,
            paymentLinkRequest
        );
    }

    public getPaymentLinks(linkId: string): Promise<ICheckout.PaymentLinkResource> {
        this._paymentLinksId.id = linkId;
        return getJsonResponse<{}, ICheckout.PaymentLinkResource>(
            this._paymentLinksId,
            {},
            { method: "GET" }
        );
    }

    public updatePaymentLinks(linkId: string, status: "expired"): Promise<ICheckout.PaymentLinkResource> {
        this._paymentLinksId.id = linkId;
        return getJsonResponse<{}, ICheckout.PaymentLinkResource>(
            this._paymentLinksId,
            { status },
            { method: "PATCH" }
        );
    }

    public paymentsDetails(paymentsDetailsRequest: ICheckout.DetailsRequest, requestOptions?: IRequest.Options): Promise<ICheckout.PaymentResponse> {
        return getJsonResponse<ICheckout.DetailsRequest, ICheckout.PaymentResponse>(
            this._paymentsDetails,
            paymentsDetailsRequest,
            requestOptions
        );
    }

    public paymentSession(
        paymentSessionRequest: ICheckout.PaymentSetupRequest,
        requestOptions?: IRequest.Options,
    ): Promise<ICheckout.PaymentSetupResponse> {
        return getJsonResponse<ICheckout.PaymentSetupRequest, ICheckout.PaymentSetupResponse>(
            this._paymentSession,
            paymentSessionRequest,
            requestOptions,
        );
    }

    public paymentResult(paymentResultRequest: ICheckout.PaymentVerificationRequest): Promise<ICheckout.PaymentVerificationResponse> {
        return getJsonResponse<ICheckout.PaymentVerificationRequest, ICheckout.PaymentVerificationResponse>(
            this._paymentsResult,
            paymentResultRequest,
        );
    }

    public originKeys(originKeysRequest: ICheckout.CheckoutUtilityRequest): Promise<ICheckout.CheckoutUtilityResponse> {
        return getJsonResponse<ICheckout.CheckoutUtilityRequest, ICheckout.CheckoutUtilityResponse>(
            this._originKeys,
            originKeysRequest,
        );
    }

    public paymentMethodsBalance(paymentMethodsBalanceRequest: ICheckout.CheckoutBalanceCheckRequest): Promise<ICheckout.CheckoutBalanceCheckResponse> {
        return getJsonResponse<ICheckout.CheckoutBalanceCheckRequest, ICheckout.CheckoutBalanceCheckResponse>(
            this._paymentMethodsBalance,
            paymentMethodsBalanceRequest,
        );
    }

    public orders(ordersRequest: ICheckout.CheckoutCreateOrderRequest): Promise<ICheckout.CheckoutCreateOrderResponse> {
        return getJsonResponse<ICheckout.CheckoutCreateOrderRequest, ICheckout.CheckoutCreateOrderResponse>(
            this._orders,
            ordersRequest,
        );
    }

    public ordersCancel(ordersCancelRequest: ICheckout.CheckoutCancelOrderRequest): Promise<ICheckout.CheckoutCancelOrderResponse> {
        return getJsonResponse<ICheckout.CheckoutCancelOrderRequest, ICheckout.CheckoutCancelOrderResponse>(
            this._ordersCancel,
            ordersCancelRequest,
        );
    }
}

export default Checkout;
