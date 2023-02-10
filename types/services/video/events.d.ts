/**
 * Emitted when the local participant's camera or a custom video has been enabled.
 *
 * @asMemberOf LocalVideo
 * @event
 * @param result - A new MediaStreamTrack object.
 *
 * @example
 * ```javascript
 * VoxeetSDK.video.on('videoStarted', (result) => {
 *
 * });
 * ```
 */
export declare function videoStarted(result: MediaStreamTrack): void;
/**
 * Emitted when the local participant's camera or a custom video has been disabled.
 *
 * @asMemberOf LocalVideo
 * @event
 * @param result - The stopped MediaStreamTrack object.
 *
 * @example
 * ```javascript
 * VoxeetSDK.video.on('videoStopped', (result) => {
 *
 * });
 * ```
 */
export declare function videoStopped(result: MediaStreamTrack): void;
/**
 * Emitted whenever a video captured by the local participant's camera or a custom video is updated.
 *
 * The event is emitted in the following situations:
 *  - A video input device is changed successfully when the local participant's video is enabled.
 *  - A video processing is enabled or disabled when the local participant's video is enabled.
 *
 * @asMemberOf LocalVideo
 * @event
 * @param result - The updated MediaStreamTrack object.
 *
 * @example
 * ```javascript
 * VoxeetSDK.video.local.on('videoUpdated', (result) => {
 *
 * });
 * ```
 */
export declare function videoUpdated(result: MediaStreamTrack): void;
