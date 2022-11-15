import { VideoProcessor } from './VideoProcessor';
/**
 * The LocalVideo model allows enabling and disabling the local participant's video and video processor.
 *
 * **An example of using the model:**
 *
 * 1. Before a conference, the local participant calls one of the **start** methods to start video transmission from either a camera or a custom track. The participant can also use the processor parameter to blur or change their background. This allows the participant to preview their video before joining.
 *
 * 2. The participant receives the [videoStarted](#videostarted) event.
 *
 * 3. To disable the video preview, the participant can call the [stop](#stop) method that triggers the [videoStopped](#videostopped) event.
 *
 * 4. The participant joins a conference.
 *
 * 5. When the participant's video stream is successfully sent to the conference, the participant receives the [streamAdded](js-client-sdk-conferenceservice#streamadded) or [streamUpdated](js-client-sdk-conferenceservice#streamupdated) event.
 *
 * 6. The participant can change the video setting while being in the conference by:
 *
 * - Disabling video processing via the [disableProcessing](#disableprocessing) method that triggers the [videoUpdated](#videostopped) event.
 *
 * - Using the [setProcessor](#setprocessor) method to enable or change the video processor. This action triggers the [videoUpdated](#videostopped) event.
 *
 * - Disable the video by calling the [stop](#stop) method. Disabling video in a conference triggers the SDK to emit the [videoStopped](#videostopped) and [streamAdded](js-client-sdk-conferenceservice#streamadded) or [streamUpdated](js-client-sdk-conferenceservice#streamupdated) events.
 *
 * This model is supported only in SDK 3.7 and later.
 *
 * The video processor needs to be initialized before usage. Otherwise, the processor does not have access to the required  `vsl_impl.wasm` and `vsl_impl.pkgwvsl` files and cannot function properly.
 */
export interface LocalVideo {
    /**
     * Enables the local participant's camera and starts a video stream transmission. If the local participant calls this method before a conference, the SDK starts a camera stream that will be added to the conference after joining and the participant can see the video preview. If the participant calls this method in a conference, the method starts sending the participant's video stream to the conference.
     *
     * If the participant calls this method when their video is already enabled, the SDK stops the existing video stream and starts a new one with new constraints.
     *
     * The method triggers the [videoStarted](#videostarted) event. Adding a new video stream to a conference additionally triggers the [streamAdded](js-client-sdk-conferenceservice#streamadded) or [streamUpdated](js-client-sdk-conferenceservice#streamupdated) events.
     *
     * This method is not available for listeners and triggers the [UnsupportedError](doc:js-client-sdk-model-unsupportederror).
     *
     * [block:callout]
     * {
     *   "type": "info",
     *   "title": "Note",
     *   "body": "This method requires using Chrome or Edge with Graphics Processing Unit (GPU) acceleration enabled and the following minimum hardware requirements:\n- i5 dual-core CPU\n- 8GB of RAM\n- 64-bit operating system"
     * }
     * [/block]
     *
     * Example:
     * ```js
     * const videoConstraints = {
     *   width: {
     *     min: "320",
     *     max: "1280",
     *   },
     *   height: {
     *     min: "240",
     *     max: "720",
     *   },
     * ;
     *
     * let videoTrack = await VoxeetSDK.video.local.start(videoConstraints);
     * ```
     *
     * @param configuration - The local participant's video configuration.
     * @param processor - The video processor configuration.
     *
     * @returns A Promise which handler receives a MediaStreamTrack object. If the track cannot be created, the promise is rejected with the [VideoServiceError](doc:js-client-sdk-model-videoserviceerror).
     */
    start(constraints?: MediaTrackConstraints, processor?: VideoProcessor): Promise<MediaStreamTrack>;
    /**
     * Starts transmission of the local participant's video from a custom track. If the local participant calls this method before a conference, the SDK starts a new stream that will be added to the conference after joining and the participant can see the video preview. If the participant calls this method in a conference, the method starts sending the participant's video stream to the conference.
     *
     * If the participant calls this method when their video is already enabled, the SDK stops the existing video stream and starts a new one with new constraints.
     *
     * The method triggers the [videoStarted](#videostarted) event. Adding a new video stream to a conference additionally triggers the [streamAdded](js-client-sdk-conferenceservice#streamadded) or [streamUpdated](js-client-sdk-conferenceservice#streamupdated) events.
     *
     * This method is not available for listeners and triggers the [UnsupportedError](doc:js-client-sdk-model-unsupportederror).
     *
     * [block:callout]
     * {
     *   "type": "info",
     *   "title": "Note",
     *   "body": "This method requires using Chrome or Edge with Graphics Processing Unit (GPU) acceleration enabled and the following minimum hardware requirements:\n- i5 dual-core CPU\n- 8GB of RAM\n- 64-bit operating system"
     * }
     * [/block]
     *
     * @param customTrack - The MediaStreamTrack object
     * @param processor - The video processor configuration.
     *
     * @returns A Promise whose fulfilment handler receives a MediaStreamTrack object. If the track cannot be created, the promise is rejected with the V[VideoServiceError](doc:js-client-sdk-model-videoserviceerror).
     */
    start(customTrack: MediaStreamTrack, processor?: VideoProcessor): Promise<MediaStreamTrack>;
    /**
     * @ignore
     */
    start(constraintsOrTrack?: MediaTrackConstraints | MediaStreamTrack, processor?: VideoProcessor): Promise<MediaStreamTrack>;
    /**
     * Stops the local participant's video stream transmission. Disabling video before a conference triggers the SDK to emit the [videoStopped](#videostopped) event. Calling this method in a conference additionally triggers the [streamAdded](js-client-sdk-conferenceservice#streamadded) or [streamUpdated](js-client-sdk-conferenceservice#streamupdated) event.
     *
     * Example:
     * ```js
     * await VoxeetSDK.video.local.stop();
     * ```
     *
     * @return A Promise which resolves when the video is successfully stopped. If the video cannot be stopped, the promise is rejected with the [VideoServiceError](doc:js-client-sdk-model-videoserviceerror).
     */
    stop(): Promise<void>;
    /**
     * Enables video processing and adds a video processor to the existing local participant's video stream to blur the participant's background or replace the background with an image. If the processor is enabled via one of the **start** methods, the setProcessor method allows changing the processor.
     *
     * The processor is supported only on Chrome and Edge on desktop operating systems.
     *
     * [block:callout]
     * {
     *   "type": "info",
     *   "title": "Note",
     *   "body": "This method requires using Chrome or Edge with Graphics Processing Unit (GPU) acceleration enabled and the following minimum hardware requirements:\n- i5 dual-core CPU\n- 8GB of RAM\n- 64-bit operating system"
     * }
     * [/block]
  
     *
     * @param processor - The video processor configuration.
     *
     * @return A Promise that resolves when the processor is successfully enabled and set. If the processor cannot be enabled, the promise is rejected with the [VideoServiceError](doc:js-client-sdk-model-videoserviceerror).
     */
    setProcessor(processor: VideoProcessor): Promise<void>;
    /**
     * Disables video processing.
     *
     * @return A Promise that resolves when the processor is successfully disabled. If the processor cannot be disabled, the promise is rejected with the [VideoServiceError](doc:js-client-sdk-model-videoserviceerror).
     */
    disableProcessing(): Promise<void>;
}
