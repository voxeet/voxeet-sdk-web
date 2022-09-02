/**
 * Emitted whenever the local participant successfully starts video transmission. The event can be triggered by the [startVideo](doc:js-client-sdk-videoservice#startvideo), [startCustomVideo](doc:js-client-sdk-videoservice#startcustomvideo), or [join](doc:js-client-sdk-conferenceservice#join) method.
 *
 * When a video input device is successfully changed during ongoing video transmission, the SDK emits two events: [videoStopped](#videostopped) and videoStarted. VideoStopped indicates that a video from the previous device is stopped. VideoStarted indicates that a video from a new device is started.
 *
 * @asMemberOf VideoService
 * @event
 * @param result - A new MediaStreamTrack object.
 *
 * @example
 * ```javascript
 * VoxeetSDK.video.on('localVideoStarted', (result) => {
 *
 * });
 * ```
 */
export declare function localVideoStarted(result: MediaStreamTrack): void;
/**
 * Emitted whenever the local participant successfully stops video transmission. The event can be triggered by the [stopVideo](doc:js-client-sdk-videoservice#stopvideo) or [leave](doc:js-client-sdk-conferenceservice#leave) method.
 *
 * When a video input device is successfully changed during ongoing video transmission, the SDK emits two events: videoStopped and [videoStarted](#videoStarted). VideoStopped indicates that a video from the previous device is stopped. VideoStarted indicates that a video from a new device is started.
 *
 * @asMemberOf VideoService
 * @event
 * @param result - The stopped MediaStreamTrack object.
 *
 * @example
 * ```javascript
 * VoxeetSDK.video.on('localVideoStopped', (result) => {
 *
 * });
 * ```
 */
export declare function localVideoStopped(result: MediaStreamTrack): void;
