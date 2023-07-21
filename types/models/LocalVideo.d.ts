/// <reference types="node" />
import { VideoProcessor } from './VideoProcessor';
import { EventEmitter } from 'events';
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
 * 5. When the participant's video stream is successfully sent to the conference, the participant receives the [streamAdded](./../classes/services_conference_ConferenceService.ConferenceService.html#streamAdded) or [streamUpdated](./../classes/services_conference_ConferenceService.ConferenceService.html#streamupdated) event.
 *
 * 6. The participant can change the video setting while being in the conference by:
 *
 * - Disabling video processing via the [disableProcessing](#disableprocessing) method that triggers the [videoUpdated](#videostopped) event.
 *
 * - Using the [setProcessor](#setprocessor) method to enable or change the video processor. This action triggers the [videoUpdated](#videostopped) event.
 *
 * - Disable the video by calling the [stop](#stop) method. Disabling video in a conference triggers the SDK to emit the [videoStopped](#videostopped) and [streamAdded](./../classes/services_conference_ConferenceService.ConferenceService.html#streamAdded) or [streamUpdated](./../classes/services_conference_ConferenceService.ConferenceService.html#streamupdated) events.
 *
 * This model is supported only in SDK 3.7 and later.
 *
 * The video processor needs to be initialized before usage. Otherwise, the processor does not have access to the required  `vsl_impl.wasm` and `vsl_impl.bin` files and cannot function properly.
 */
export interface LocalVideo extends EventEmitter {
    /**
     * Enables the local participant's camera and starts a video stream transmission. If the local participant calls this method before a conference, the SDK starts a camera stream that will be added to the conference after joining and the participant can see the video preview. If the participant calls this method in a conference, the method starts sending the participant's video stream to the conference. By default, when video constraints are not specified, the SDK starts a video stream with a resolution of 1280x720 at 25 frames per second.
     *
     * If the participant calls this method when their video is already enabled, the SDK stops the existing video stream and starts a new one with new constraints.
     *
     * The method triggers the [videoStarted](#videostarted) event. Adding a new video stream to a conference additionally triggers the [streamAdded](./../classes/services_conference_ConferenceService.ConferenceService.html#streamAdded) or [streamUpdated](./../classes/services_conference_ConferenceService.ConferenceService.html#streamupdated) events.
     *
     * This method is not available for listeners and triggers the [UnsupportedError](./../classes/lib_Exceptions.UnsupportedError.html).
     *
     * **Note**: If you want to use the `processor` parameter, make sure that you use Chrome or Edge with Graphics Processing Unit (GPU) acceleration enabled and the following minimum hardware requirements:
     * - i5 dual-core CPU
     * - 8GB of RAM
     * - 64-bit operating system
     *
     * @example
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
     * For more information about using this method, see the [Enable Video Processing](https://docs.dolby.io/communications-apis/docs/enable-video-processing) guide.
     *
     * @param constraints - The [MediaTrackConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints). If the constrains are not specified, the SDK uses 720p (1280 x 720) resolution at 25fps to capture video.
     * @param processor - The video processor configuration.
     *
     * @returns A Promise which handler receives a MediaStreamTrack object. If the track cannot be created, the promise is rejected with an error.
     */
    start(constraints?: MediaTrackConstraints, processor?: VideoProcessor): Promise<MediaStreamTrack>;
    /**
     * Starts transmission of the local participant's video from a custom track. If the local participant calls this method before a conference, the SDK starts a new stream that will be added to the conference after joining and the participant can see the video preview. If the participant calls this method in a conference, the method starts sending the participant's video stream to the conference.
     *
     * If the participant calls this method when their video is already enabled, the SDK stops the existing video stream and starts a new one with new constraints.
     *
     * The method triggers the [videoStarted](#videostarted) event. Adding a new video stream to a conference additionally triggers the [streamAdded](./../classes/services_conference_ConferenceService.ConferenceService.html#streamAdded) or [streamUpdated](./../classes/services_conference_ConferenceService.ConferenceService.html#streamupdated) events.
     *
     * This method is not available for listeners and triggers the [UnsupportedError](./../classes/lib_Exceptions.UnsupportedError.html).
     *
     * **Note**: If you want to use the `processor` parameter, make sure that you use Chrome or Edge with Graphics Processing Unit (GPU) acceleration enabled and the following minimum hardware requirements:
     * - i5 dual-core CPU
     * - 8GB of RAM
     * - 64-bit operating system
     *
     * @param customTrack - The MediaStreamTrack object
     * @param processor - The video processor configuration.
     *
     * @returns A Promise which handler receives a MediaStreamTrack object. If the track cannot be created, the promise is rejected with an error.
     */
    start(customTrack: MediaStreamTrack, processor?: VideoProcessor): Promise<MediaStreamTrack>;
    /**
     * @ignore
     */
    start(constraintsOrTrack?: MediaTrackConstraints | MediaStreamTrack, processor?: VideoProcessor): Promise<MediaStreamTrack>;
    /**
     * Stops the local participant's video stream transmission. Disabling video before a conference triggers the SDK to emit the [videoStopped](#videostopped) event. Calling this method in a conference additionally triggers the [streamAdded](./../classes/services_conference_ConferenceService.ConferenceService.html#streamAdded) or [streamUpdated](./../classes/services_conference_ConferenceService.ConferenceService.html#streamupdated) event.
     *
     * @example
     * ```js
     * await VoxeetSDK.video.local.stop();
     * ```
     *
     * @return A Promise which resolves when the video is successfully stopped. If the video cannot be stopped, the promise is rejected with an error.
     */
    stop(): Promise<void>;
    /**
     * Enables video processing and adds a video processor to the existing local participant's video stream to blur the participant's background or replace the background with an image. If the processor is enabled via one of the **start** methods, the setProcessor method allows changing the processor.
     *
     * **Note**: This method requires using Chrome or Edge with Graphics Processing Unit (GPU) acceleration enabled and the following minimum hardware requirements:
     * - i5 dual-core CPU
     * - 8GB of RAM
     * - 64-bit operating system
     *
     * **Warning**: If you use two different URLs for serving your application and hosting the SDK through a Content Delivery Network (CDN), you have to enable cross-origin resource sharing (CORS) to use this method. To enable CORS, see the [Install the SDK](https://docs.dolby.io/communications-apis/docs/initializing-javascript#install-the-sdk) instruction.
     *
     * For more information about using this method, see the [Enable Video Processing](https://docs.dolby.io/communications-apis/docs/enable-video-processing) guide.
     *
     * @param processor - The video processor configuration.
     *
     * @return A Promise that resolves when the processor is successfully enabled and set. If the processor cannot be enabled, the promise is rejected with an error.
     */
    setProcessor(processor: VideoProcessor): Promise<void>;
    /**
     * Disables video processing.
     *
     * @return A Promise that resolves when the processor is successfully disabled. If the processor cannot be disabled, the promise is rejected with an error.
     */
    disableProcessing(): Promise<void>;
    /**
     * Applies a set of constraints to a video track to allow setting ideal values and acceptable value ranges of constrainable properties of the track, such as frame rate or dimensions. The method does not allow setting the deviceId and groupId constraints. If the required constraints are too strict to find a match during a track configuration attempt, the promise is rejected with an error. We recommend using this method for applying constraints, especially when video processing is enabled; [MediaStreamTrack.applyconstraints()](https://www.w3.org/TR/mediacapture-streams/#dom-mediastreamtrack-applyconstraints) may not work as expected when the video processor is enabled.
     *
     * Calling this method when the local video is not started causes a promise rejection with an error.
     *
     * @param constraints - The [WebRTC video constraints](https://www.w3.org/TR/mediacapture-streams/#dom-mediastreamconstraints-video).
     */
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
}
