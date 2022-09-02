import { LocalVideo } from '../../models/LocalVideo';
import { VideoDeviceHelper } from './VideoDeviceHelper';
import { VideoProcessor } from '../../models/VideoProcessor';
/**
 * Implementation of LocalVideo interface.
 *
 * @ignore
 */
export declare class LocalVideoImpl implements LocalVideo {
    #private;
    constructor(videoDeviceHelper?: VideoDeviceHelper);
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
    private initCamera;
    private initCustom;
    private isLocalVideoStarted;
    private startLocalVideo;
    private stopLocalVideo;
    changeCameraDeviceId(deviceId: string): Promise<void>;
    private onBandwidthRestrictionChanged;
}
