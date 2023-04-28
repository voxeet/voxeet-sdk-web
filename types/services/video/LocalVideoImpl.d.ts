import { ConferenceJoined, ConferenceLeft } from '../../events/conference/index';
import { BaseConferenceService } from '../Service';
import { LocalVideo } from '../../models/LocalVideo';
import { VideoDeviceHelper } from './VideoDeviceHelper';
import { VideoProcessor } from '../../models/VideoProcessor';
/**
 * @ignore
 */
export declare enum LocalVideoEvents {
    /**
     * Emitted when the local participant's camera or a custom video has been enabled.
     */
    VideoStarted = "videoStarted",
    /**
     * Emitted when the local participant's camera or a custom video has been disabled.
     */
    VideoStopped = "videoStopped",
    /**
     * Emitted when the local participant's camera or a custom video has been updated.
     */
    VideoUpdated = "videoUpdated",
    /**
     * Emitted when internal error occurs
     */
    VideoInternalError = "videoInternalError"
}
/**
 * Implementation of LocalVideo interface.
 *
 * @ignore
 */
export declare class LocalVideoImpl extends BaseConferenceService implements LocalVideo {
    #private;
    constructor(sdk: any, videoDeviceHelper: VideoDeviceHelper);
    /**
     * @implements LocalVideo.start()
     */
    start(constraintsOrTrack?: MediaTrackConstraints | MediaStreamTrack, processor?: VideoProcessor): Promise<MediaStreamTrack>;
    private startLocalVideo;
    /**
     * @implements LocalVideo.stop()
     */
    stop(): Promise<void>;
    private stopLocalVideo;
    /**
     * @implements LocalVideo.setProcessor()
     */
    setProcessor(processor: VideoProcessor): Promise<void>;
    /**
     * @implements LocalVideo.disableProcessing()
     */
    disableProcessing(): Promise<void>;
    /**
     * @implements LocalVideo.applyConstraints()
     */
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    private emitLocalVideoStarted;
    private emitLocalVideoStopped;
    private emitLocalVideoUpdated;
    private emitLocalVideoInternalEvent;
    private changeCameraDeviceId;
    private onBandwidthRestrictionChanged;
    private onUpdateToken;
    private handleProcessingError;
    private getLocalVideo;
    private getLocalVideoAsCamera;
    private isLocalVideoCamera;
    private isLocalVideoCustom;
    private attachLocalVideo;
    private detachLocalVideo;
    private isLocalVideoAttached;
    private createLocalVideo;
    private getProcessedVideo;
    private attachProcessedVideo;
    private detachProcessedVideo;
    private isProcessedVideoAttached;
    private createProcessedVideo;
    private verifyVideoProcessorOrThrow;
    protected onConferenceJoined(e: ConferenceJoined): void;
    protected onConferenceLeft(e: ConferenceLeft): void;
    private onVideoStarted;
    private onVideoStopped;
    private onVideoUpdated;
}
