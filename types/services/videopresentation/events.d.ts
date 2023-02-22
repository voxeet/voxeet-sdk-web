import VideoPresentation from '../../models/VideoPresentation';
/**
 * Emitted when a video presentation is started.
 *
 * @asMemberOf VideoPresentationService
 * @param e - The object containing properties specific to the event.
 * @event
 *
 * @example
 * ```javascript
 *
 * VoxeetSDK.videoPresentation.on("started", (e) => {
 *
 * });
 * ```
 */
export declare function started(e: VideoPresentation): void;
/**
 * Emitted when a video presentation is stopped.
 *
 * @asMemberOf VideoPresentationService
 * @param e
 * @event
 *
 * @example
 * ```javascript
 *
 * VoxeetSDK.videoPresentation.on("stopped", () => {
 *
 * });
 * ```
 */
export declare function stopped(): void;
/**
 * Emitted when a video presentation is resumed.
 *
 * @asMemberOf VideoPresentationService
 * @param e - The object containing properties specific to the event.
 * @event
 *
 * @example
 * ```javascript
 *
 * VoxeetSDK.videoPresentation.on("played", (e) => {
 *
 * });
 * ```
 */
export declare function played(e: VideoPresentation): void;
/**
 * Emitted when a video presentation is paused.
 *
 * @asMemberOf VideoPresentationService
 * @param e - The object containing properties specific to the event.
 * @event
 *
 * @example
 * ```javascript
 *
 * VoxeetSDK.videoPresentation.on("paused", (e) => {
 *
 * });
 * ```
 */
export declare function paused(e: VideoPresentation): void;
/**
 * Emitted when a video presentation is sought.
 *
 * @asMemberOf VideoPresentationService
 * @param e - The object containing properties specific to the event.
 * @event
 *
 * @example
 * ```javascript
 *
 * VoxeetSDK.videoPresentation.on("sought", (e) => {
 *
 * });
 * ```
 */
export declare function sought(e: VideoPresentation): void;
