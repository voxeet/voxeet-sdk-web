import { VideoDeviceHelper } from './VideoDeviceHelper';
import { VideoProcessor } from './VideoProcessor';
/**
 * @ignore
 */
export declare class VideoManager {
    #private;
    /**
     * @ignore
     */
    constructor(videoDeviceHelper?: VideoDeviceHelper);
    startCamera(constraints?: MediaTrackConstraints, processor?: VideoProcessor): Promise<MediaStream>;
    startCustomCamera(track?: MediaStreamTrack, processor?: VideoProcessor): Promise<MediaStream>;
    stopCamera(): Promise<void>;
    setCameraProcessor(processor: VideoProcessor): Promise<void>;
    private isCameraStreamStarted;
    private startCameraStream;
    private stopCameraStream;
    changeCameraDeviceId(deviceId: string): Promise<void>;
    private onBandwidthRestrictionChanged;
}
