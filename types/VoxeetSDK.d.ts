/// <reference types="node" />
import { EventEmitter } from 'events';
import { BroadcastingService, CommandService, ConferenceService, ExtensionsService, FilePresentationService, MediaDeviceService, NotificationService, RecordingService, SessionService, VideoPresentationService, VideoFiltersService } from './services';
import { Configuration } from './models/Configuration';
/**
 * VoxeetSDK is the main object that allows the application to interact with Voxeet services. The SDK is asynchronous and uses promise at its core.
 *
 * @noInheritDoc
 */
export default class VoxeetSDK extends EventEmitter {
    #private;
    private static instance;
    /**
     * @ignore
     * The current SDK version.
     */
    static version: string;
    private static host;
    private static wsHost;
    private static telemetryHost;
    static enableTelemetry: boolean;
    /**
     * @ignore
     * the current sdk flavor
     */
    static readonly flavor: string;
    /**
     * @deprecated
     * @ignore
     */
    userId: string;
    /**
     * @deprecated Will became private
     */
    private constructor();
    /**
     * Retrieves the [SessionService](doc:js-client-sdk-sessionservice) instance that allows the participant to use sessions.
     */
    static get session(): SessionService;
    /**
     * Retrieves the [MediaDeviceService](doc:js-client-sdk-mediadeviceservice) instance that allows the participant to interact with devices through the system.
     */
    static get mediaDevice(): MediaDeviceService;
    /**
     * Retrieves the [ConferenceService](doc:js-client-sdk-conferenceservice) instance that allows the participant to interact with conferences.
     */
    static get conference(): ConferenceService;
    /**
     * Retrieves the [RecordingService](doc:js-client-sdk-recordingservice) instance that allows the participant to record conferences.
     */
    static get recording(): RecordingService;
    /**
     * Retrieves the [FilePresentationService](doc:js-client-sdk-filepresentationservice) instance that allows the participant to use file presentations.
     */
    static get filePresentation(): FilePresentationService;
    /**
     * Retrieves the [VideoPresentationService](doc:js-client-sdk-videopresentationservice) instance that allows the participant to use video presentations.
     */
    static get videoPresentation(): VideoPresentationService;
    /**
     * The Video Stream Broadcasting Service.
     * @ignore
     */
    static get broadcasting(): BroadcastingService;
    /**
     * Retrieves the [CommandService](doc:js-client-sdk-commandservice) instance that allows the participant to send messages to the specified conferences.
     */
    static get command(): CommandService;
    /**
     * Retrieves the [VideoFiltersService](doc:js-client-sdk-videofiltersservice) instance that allows the local participant to blur the participant's background or use a selected image as the background.
     */
    static get videoFilters(): VideoFiltersService;
    /**
     * Retrieves the [NotificationService](doc:js-client-sdk-notificationservice) instance that allows forwarding notifications from developers to the properly registered managers.
     *
     *
     */
    static get notification(): NotificationService;
    /**
     * @ignore
     */
    static get extensions(): ExtensionsService;
    /**
     * Initializes the SDK using the customer key and secret.
     *
     * @param customerKey - The customer key.
     * @param customerSecret - The customer secret.
     * @param __namedParameters Optional parameter to override SDK default configuration
     * @param host host
     * @param wsHost wshost
     * @param enableTelemetry enable telemetry
     * @param telemetryHost telemetry host
     */
    static initialize(customerKey: string, customerSecret: string, { host, wsHost, enableTelemetry, telemetryHost }?: Configuration): void;
    /**
     * display SDK settings to the browser console.
     * @ignore
     */
    static displaySettings(): void;
    /**
     * Initialize the SDK with an access token that is provided by the customer backend communicating with Voxeet servers. The token allows securing the customer key and secret.
     *
     * The following diagram presents the authentication flow:
     *
     * ```
     * Client          Customer Server       Voxeet Server
     *   |                    |                    |
     *   |  Get Access Token  |  /oauth2/token (1) |
     *   |------------------->|------------------->|
     *   |    Access Token    |    Access Token    |
     *   |<-------------------|<-------------------|
     *   |  initializeToken(accessToken, callback) |
     *   |---------------------------------------->|
     * ```
     *
     * The access token has a limited period of validity and needs to be refreshed for security reasons. In such case,
     * The Voxeet SDK will call the callback provided to initializeToken. The callback must return a Promise
     * containing the refreshed access token by calling the customer backend, as presented in the following diagram:
     *
     * ```
     * Client          Customer Server       Voxeet Server
     *   |      callback      |  /oauth2/token (2) |
     *   |------------------->|------------------->|
     *   |    Access Token    |    Access Token    |
     *   |<-------------------|<-------------------|
     * ```
     *
     * Where (1) and (2) are two REST API endpoints available on Voxeet servers and documented on the developer portal.
     *
     * @param accessToken - The access token provided by the customer's backend
     * @param callback - A callback returning a promise, called when the access token needs to refreshed
     * @param __namedParameters Optional parameter to override SDK default configuration
     * @param host host
     * @param wsHost wshost
     * @param enableTelemetry enable telemetry
     * @param telemetryHost telemetry host
     */
    static initializeToken(accessToken: string, callback: Function, { host, wsHost, enableTelemetry, telemetryHost }?: Configuration): void;
    /**
     * Allows to request for a specific region. This method must be called after initialize and before opening a session.
     * @param region
     * @ignore
     */
    static region(region?: string): void;
}
