/// <reference types="node" />
import { Awaited } from '../utils/Awaited';
import { NotAsyncFunction } from '../utils/NotAsyncFunction';
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
    #private;
    protected _conferenceId: string;
    constructor(sdk: any);
    protected onConferenceJoined(e: ConferenceJoined): void;
    protected onConferenceLeft(e: ConferenceLeft): void;
    /**
     * @ignore
     * */
    checkConference(): void;
    protected onSessionOpened(): void;
    protected onSessionClosed(): void;
    protected get isSessionOpened(): boolean;
    /**
     * @ignore
     * */
    checkSession(errorMessage?: string): void;
}
/**
 * @ignore
 */
export declare function ConferenceNotNull(): <T extends BaseConferenceService>(target: T, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * @ignore
 * A method decorator intended to decorate an asynchronous functions.
 *
 * It checks session state and if it is closed, decorator returns a rejected promise with SessionError.
 *
 * If decorator decorates a synchronous method, a compile-time error will be thrown.
 *
 * This decorator is intended only for methods of a class derived from BaseConferenceService.
 *
 * Example:
 *
 * class MediaService extends BaseConferenceService {
 *
 *    @RejectIfSessionClosed('Failed to start video. Session is closed.')
 *    startVideo(): Promise<MediaStreamTrack> {
 *        ...
 *    }
 *
 *    @RejectIfSessionClosed('Failed to start audio. Session is closed.')
 *    async startAudio: Promise<MediaStreamTrack> {
 *        ...
 *    }
 * }
 *
 * @param errorMessage - custom error message. It is optional argument.
 */
export declare function RejectIfSessionClosed(errorMessage?: string): <T extends BaseConferenceService, Func extends (...args: any[]) => Promise<any>, Ret extends Awaited<ReturnType<Func>>, Args extends Parameters<Func>>(target: T, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: Args) => Promise<Ret>>) => TypedPropertyDescriptor<(...args: Args) => Promise<Ret>>;
/**
 * @ignore
 * A method decorator intended to decorate a synchronous functions.
 *
 * It checks session state and if it is closed, decorator throws SessionError.
 *
 * If decorator decorates an asynchronous method, a compile-time error will be thrown.
 *
 * This decorator is intended only for methods of a class derived from BaseConferenceService.
 *
 * Example:
 *
 * class MediaService extends BaseConferenceService {
 *
 *    @ThrowIfSessionClosed('Failed to start video. Session is closed.')
 *    startVideo(): MediaStreamTrack {
 *        ...
 *    }
 * }
 *
 * @param errorMessage - custom error message. It is optional argument.
 */
export declare function ThrowIfSessionClosed(errorMessage?: string): <T extends BaseConferenceService, Func extends (...args: any[]) => any, Ret extends ReturnType<Func>, Args extends Parameters<Func>>(target: T, propertyKey: string, descriptor: TypedPropertyDescriptor<NotAsyncFunction<(...args: Args) => Ret>>) => TypedPropertyDescriptor<NotAsyncFunction<(...args: Args) => Ret>>;
/**
 * @ignore
 * @param events
 */
export declare function Subscribe<E extends keyof AllEventsType>(events: E[]): <T extends new (...constructorArgs: any[]) => any>(constructorFunction: T) => any;
