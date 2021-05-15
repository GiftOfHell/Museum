/* tslint:disable */
/* eslint-disable */
/**
 * Museum service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Ticket
 */
export interface Ticket {
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    price1?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    price2?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    price3?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    museumName1?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    museumName2?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    museumName3?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    amount1?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    amount2?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    amount3?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    date1?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    date2?: string;
    /**
     * 
     * @type {string}
     * @memberof Ticket
     */
    date3?: string;
}

export function TicketFromJSON(json: any): Ticket {
    return TicketFromJSONTyped(json, false);
}

export function TicketFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ticket {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'price1': !exists(json, 'price1') ? undefined : json['price1'],
        'price2': !exists(json, 'price2') ? undefined : json['price2'],
        'price3': !exists(json, 'price3') ? undefined : json['price3'],
        'museumName1': !exists(json, 'museumName1') ? undefined : json['museumName1'],
        'museumName2': !exists(json, 'museumName2') ? undefined : json['museumName2'],
        'museumName3': !exists(json, 'museumName3') ? undefined : json['museumName3'],
        'amount1': !exists(json, 'amount1') ? undefined : json['amount1'],
        'amount2': !exists(json, 'amount2') ? undefined : json['amount2'],
        'amount3': !exists(json, 'amount3') ? undefined : json['amount3'],
        'date1': !exists(json, 'date1') ? undefined : json['date1'],
        'date2': !exists(json, 'date2') ? undefined : json['date2'],
        'date3': !exists(json, 'date3') ? undefined : json['date3'],
    };
}

export function TicketToJSON(value?: Ticket | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'price1': value.price1,
        'price2': value.price2,
        'price3': value.price3,
        'museumName1': value.museumName1,
        'museumName2': value.museumName2,
        'museumName3': value.museumName3,
        'amount1': value.amount1,
        'amount2': value.amount2,
        'amount3': value.amount3,
        'date1': value.date1,
        'date2': value.date2,
        'date3': value.date3,
    };
}


