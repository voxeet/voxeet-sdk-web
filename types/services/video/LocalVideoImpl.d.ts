import { BaseConferenceService } from '../Service';
import { LocalVideo } from '../../models/LocalVideo';
import { VideoDeviceHelper } from './VideoDeviceHelper';
import { VideoProcessor } from '../../models/VideoProcessor';
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
    /**
     * @implements LocalVideo.stop()
     */
    stop(): Promise<void>;
    /**
     * @implements LocalVideo.setProcessor()
     */
    setProcessor(processor: VideoProcessor): Promise<void>;
    /**
     * @implements LocalVideo.disableProcessing()
     */
    disableProcessing(): Promise<void>;
    private emitLocalVideoStarted;
    private emitLocalVideoStopped;
    private emitLocalVideoUpdated;
    private changeCameraDeviceId;
    private onBandwidthRestrictionChanged;
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
    private initVideoProcessing;
}
