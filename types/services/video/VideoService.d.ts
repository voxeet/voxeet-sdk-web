import { BaseConferenceService } from '../Service';
import { VideoManager } from './VideoManager';
import { VideoProcessor } from './VideoProcessor';
/**
 * The VideoService allows managing the local participant's video stream.
 */
export declare class VideoService extends BaseConferenceService {
    #private;
    /**
     * @ignore
     */
    constructor(sdk: any, manager: VideoManager);
    /**
     * Enables the local participant's camera and starts sending the local participant's video stream to the conference. If the participant calls this method when their video is already enabled, the SDK stops the existing video stream and starts a new one. The new stream is successfully added to the conference only if video is not disabled via the [disableVideo](doc:js-client-sdk-conferenceservice#disablevideo) method and video [constraints](doc:js-client-sdk-model-joinoptions#constraints) are not set to false.
     *
     * In the case of calling this method before the conference, the SDK starts a camera stream that will be added to the conference after joining.
     *
     * @param constraints - The media track constraint.
     * @param processor - The video processor that allows blurring the participant's background or replacing the background with an image. The processor is supported only on Chrome and Edge on desktop operating systems.
     */
    startVideo(constraints?: MediaTrackConstraints, processor?: VideoProcessor): Promise<MediaStream>;
    /**
     * Starts sending the local participant's video from a custom track to the conference. If the participant calls this method when their video is already enabled, the SDK stops the existing video stream and starts a new one. The new stream is successfully added to the conference only if video is not disabled via the [disableVideo](doc:js-client-sdk-conferenceservice#disablevideo) method and video [constraints](doc:js-client-sdk-model-joinoptions#constraints) are not set to false.
     *
     * In the case of calling this method before the conference, the SDK starts a camera stream that will be added to the conference after joining.
     *
     * @param track - The input video track that replaces the camera track.
     * @param processor - The video processor that allows blurring the participant's background or replacing the background with an image. The processor is supported only on Chrome and Edge on desktop operating systems.
     */
    startCustomVideo(track: MediaStreamTrack, processor?: VideoProcessor): Promise<MediaStream>;
    /**
     * Disables the local participant's camera and stops sending the local participant's video stream to the conference. If you want to see your video locally, as a preview, and not send it to the conference, use the [disableVideo](doc:js-client-sdk-conferenceservice#disablevideo) method.
     */
    stopVideo(): Promise<void>;
    /**
     * Sets a new video processor for an existing local participant's video stream to blur the participant's background or replace the background with an image. The processor is supported only on Chrome and Edge on desktop operating systems.
     *
     *
     * @param processor - The video processor.
     */
    setVideoProcessor(processor: VideoProcessor): Promise<void>;
    /**
     * @ignore
     */
    private onCameraStarted;
    /**
     * @ignore
     */
    private onCameraStopped;
}
