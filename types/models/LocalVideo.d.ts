import { VideoProcessor } from './VideoProcessor';
/**
 * The LocalVideo model allows enabling and disabling the local participant's video and video processor.
 *
 * This model is supported only in SDK 3.7 and later.
 */
export interface LocalVideo {
    /**
     * Enables the local participant's camera and starts sending the participant's video stream to the conference.
     * If the participant calls this method when their video is already enabled, the SDK stops
     * the existing video stream and starts a new one
     * with new constraints. In the case of calling this method before the conference, the SDK starts a camera stream
     * that will be added to the conference after joining.
     *
     * Adding a new video stream to a conference triggers one the streamAdded or streamUpdated events.
     *
     * @param configuration - The local participant's video configuration.
     * @param processor - The video processor configuration.
     *
     * @returns A Promise which fulfilment handler receives a MediaStreamTrack object. If the track cannot be created, the promise is rejected with the [VideoServiceError](doc:js-client-sdk-model-videoserviceerror).
     */
    start(constraints?: MediaTrackConstraints, processor?: VideoProcessor): Promise<MediaStreamTrack>;
    /**
     * Starts sending the local participant's video from a custom track to the conference.
     * If the participant calls this method when their video is already enabled, the SDK stops the existing video stream and starts a new one. In the case of calling this method before the conference, the SDK starts a stream that will be added to the conference after joining.
     *
     * Adding a new video stream to a conference triggers one the streamAdded or streamUpdated events.
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
     * Stops sending the local participant's video
     * stream to the conference.
     *
     * @return A Promise which resolves when the video is successfully stopped. If the video cannot be stopped, the promise is rejected with the [VideoServiceError](doc:js-client-sdk-model-videoserviceerror).
     */
    stop(): Promise<void>;
    /**
     * Enables video processing and sets a new video processor for the existing
     * local participant's video stream to blur the participant's background or
     * replace the background with an image.
     *
     * The processor is supported only on Chrome and Edge on desktop operating systems.
     *
     * @param processor - The video processor configuration.
     *
     * @return A Promise which resolves when the processor is successfully enabled and set. If the processor cannot be enabled, the promise is rejected with the [VideoServiceError](doc:js-client-sdk-model-videoserviceerror).
     */
    setProcessor(processor: VideoProcessor): Promise<void>;
    /**
     * Disables video processing.
     *
     * @return A Promise which resolves when the processor is successfully disabled. If the processor cannot be disabled, the promise is rejected with the [VideoServiceError](doc:js-client-sdk-model-videoserviceerror).
     */
    disableProcessing(): Promise<void>;
}
