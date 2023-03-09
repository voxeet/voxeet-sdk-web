/// <reference types="node" />
import { EventEmitter } from 'events';
import { ConferenceJoined, ConferenceLeft } from '../events/conference/index';
import { AllEventsType } from '../events';
/**
 * @ignore
 */
export default class Service extends EventEmitter {
    protected _sdk: any;
    constructor(sdk: any);
}
/**
 * @ignore
 */
export declare class BaseConferenceService extends Service {
    protected _conferenceId: string;
    constructor(sdk: any);
    protected onConferenceJoined(e: ConferenceJoined): void;
    protected onConferenceLeft(e: ConferenceLeft): void;
    /**
     * @ignore
     * */
    checkConference(): void;
}
/**
 * @ignore
 */
export declare function ConferenceNotNull(): <T extends BaseConferenceService>(target: T, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * @ignore
 * @param type
 */
export declare function Register(type: keyof AllEventsType): <T extends BaseConferenceService>(target: T, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * @ignore
 * @param events
 */
export declare function Subscribe<E extends keyof AllEventsType>(events: E[]): <T extends new (...constructorArgs: any[]) => any>(constructorFunction: T) => any;
