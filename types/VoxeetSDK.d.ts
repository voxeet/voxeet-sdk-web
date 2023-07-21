/// <reference types="node" />
import { EventEmitter } from 'events';
import { BroadcastingService, CommandService, ConferenceService, ExtensionsService, FilePresentationService, MediaDeviceService, NotificationService, RecordingService, SessionService, VideoPresentationService, VideoFiltersService, VideoService, AudioService } from './services';
import { Configuration } from './models/Configuration';
/**
 * VoxeetSDK is the main object that allows the application to interact with Voxeet services. The SDK is asynchronous and uses promise at its core.
 *
 * For more information about initializing the SDK, see the [Initializing](https://docs.dolby.io/communications-apis/docs/initializing-javascript) guide.
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
    private static fileHost;
    private static telemetryHost;
    /**
     * @ignore
     */
    static enableTelemetry: boolean;
    /**
     * @ignore
     * the current sdk flavor
     */
    static readonly flavor: string;
    /**
     * Register component information in the VoxeetSDK.
     *
     * @param name    Component name
     * @param version Component version
     * @ignore
     */
    static registerComponentVersion(name: string, version: string): void;
    /**
     * @deprecated
     * @ignore
     */
    userId: string;
    private constructor();
    /**
     * Retrieves the [SessionService](./services_session_SessionService.SessionService.html) instance that allows the SDK to connect with the Dolby.io backend.
     */
    static get session(): SessionService;
    /**
     * Retrieves the [MediaDeviceService](./services_mediadevice_MediaDeviceService.MediaDeviceService.html) instance that allows managing devices through the system.
     */
    static get mediaDevice(): MediaDeviceService;
    /**
     * Retrieves the [ConferenceService](./services_conference_ConferenceService.ConferenceService.html) instance that allows interacting with conferences.
     */
    static get conference(): ConferenceService;
    /**
     * Retrieves the [RecordingService](./services_recording_RecordingService.RecordingService.html) instance that allows recording conferences.
     */
    static get recording(): RecordingService;
    /**
     * Retrieves the [FilePresentationService](./services_filepresentation_FilePresentationService.FilePresentationService.html) instance that allows presenting files during conferences.
     */
    static get filePresentation(): FilePresentationService;
    /**
     * Retrieves the [VideoPresentationService](./services_videopresentation_VideoPresentationService.VideoPresentationService.html) instance that allows presenting video files during conferences.
     */
    static get videoPresentation(): VideoPresentationService;
    /**
     * The Video Stream Broadcasting Service.
     * @ignore
     */
    static get broadcasting(): BroadcastingService;
    /**
     * Retrieves the [CommandService](./services_command_CommandService.CommandService.html) instance that allows sending messages to conferences.
     */
    static get command(): CommandService;
    /**
     * **Note**: This API is available only to the [Desktop SDK](https://docs.dolby.io/communications-apis/docs/desktop-sdk-overview) users.
     *
     * Retrieves the [VideoFiltersService](./services_videofilters_VideoFiltersService.VideoFiltersService.html) instance that allows the local participant to blur the participant's background or use a selected image as the background.
     */
    static get videoFilters(): VideoFiltersService;
    /**
     * Retrieves the [VideoService](./services_video_VideoService.VideoService.html) instance that allows conference participants to enable and disable video.
     *
     * This API is available in SDK 3.7 and later.
     */
    static get video(): VideoService;
    /**
     * Retrieves the [NotificationService](./services_notification_NotificationService.NotificationService.html) instance that allows inviting participants to conferences.
     *
     *
     */
    static get notification(): NotificationService;
    /**
     * Retrieves the [AudioService](./services_audio_AudioService.AudioService.html) instance that allows enabling and disabling audio.
     *
     * This API is available in SDK 3.7 and later.
     */
    static get audio(): AudioService;
    /**
     * @ignore
     */
    static get extensions(): ExtensionsService;
    /**
     * UxKit version setter
     * @deprecated
     * @ignore
     */
    static set uxkitVersion(version: string);
    /**
     * Retrieves the URL prefix that is responsible for fetching SDK package files.
     */
    static get packageUrlPrefix(): string;
    /**
     * Sets the URL prefix that is responsible for fetching SDK package files. By default, the prefix is generated automatically based on the main JavaScript file path. For example, when the prefix is set to "https://example.com/lib/dist/", the binary file will be fetched using the "https://example.com/lib/dist/dvwc_impl.wasm" URL.
     *
     * If you want to set a new value of the prefix, the value needs to be a string. If you want to reset the prefix to the default value, set the prefix to null, false, or undefined. Any other values trigger the [ParameterError](./lib_Exceptions.ParameterError.html).
     *
     * The prefix must contain the '/' character at the end. If the prefix ends with any other character, the SDK automatically adds '/' at its end.
     */
    static set packageUrlPrefix(prefix: string);
    /**
     * Initializes the SDK using the customer key and secret.
     *
     * @param customerKey - The customer key.
     * @param customerSecret - The customer secret.
     * @param __namedParameters Optional parameter to override SDK default configuration
     * @param host host
     * @param wsHost websocket host
     * @param fileHost file conversion host
     * @param enableTelemetry enable telemetry
     * @param telemetryHost telemetry host
     */
    static initialize(customerKey: string, customerSecret: string, { host, wsHost, fileHost, enableTelemetry, telemetryHost, }?: Configuration): void;
    /**
     * display SDK settings to the browser console.
     * @ignore
     */
    static displaySettings(): void;
    /**
     * Initializes the SDK with the client access token provided by the Dolby.io platform. The client access token protects customer's conferences from unauthorized access and can be generated only by the Dolby.io platform via an application's authentication server and the [oauth2/token](https://docs.dolby.io/communications-apis/reference/get-client-access-token) request. The SDK requests a new token from the platform after half of the token expiration time, three fourth of the token expiration time, and when the token expires.
     *
     * The initializeToken method saves the received token and starts the token expiration timers. The method requires providing two parameters - the **client access token** received from the Dolby.io platform and the **refresh token callback**. The callback must be a function that requests a new token and returns a Promise containing the refreshed client access token when the token is incorrect or needs to be refreshed. The refresh token callback uses an **isExpired** boolean parameter to inform whether the currently used client access token is expired.
     *
     * ```js
     * VoxeetSDK.initializeToken(accessToken, (isExpired) => {
     *  if (isExpired) {
     *    // The token expired
     *    throw "The access token has expired.";
     *  }
     *
     *  return requestNewToken();
     * });
     * ```
     *
     * The Dolby.io platform verifies each API call and processes the call only if the provided token is correct.
     *
     * <img src="https://files.readme.io/00aacd8-client-access-token-overview.png" width="700"/>
     *
     * @param accessToken -  The client access token received from the Dolby.io platform.
     * @param callback - A function that requests and returns a new client access token from the Dolby.io platform when the previous token is incorrect or should be refreshed. The callback must use the **isExpired** boolean parameter to inform whether the currently used client access token is expired.
     * @param __namedParameters Optional parameter to override SDK default configuration
     * @param host host
     * @param wsHost websocket host
     * @param fileHost file conversion host
     * @param enableTelemetry enable telemetry
     * @param telemetryHost telemetry host
     */
    static initializeToken(accessToken: string, callback: Function, { host, wsHost, fileHost, enableTelemetry, telemetryHost, }?: Configuration): void;
    /**
     * Allows to request for a specific region. This method must be called after initialize and before opening a session.
     * @param region
     * @ignore
     */
    static region(region?: string): void;
}
