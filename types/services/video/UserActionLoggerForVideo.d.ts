import { VideoProcessor, VideoProcessorOptions } from '../../models/VideoProcessor';
/**
 * Collection of all possible video events that can be sent as UserAction.
 * @ignored
 */
export declare class UserActionLoggerForVideo {
    #private;
    constructor(component: string);
    cameraVideoStarted(api: string, constraints: MediaTrackConstraints, processor?: VideoProcessor | VideoProcessorOptions): void;
    cameraVideoStartFailed(api: string, error: Error, constraints: MediaTrackConstraints, processor?: VideoProcessorOptions | VideoProcessor): void;
    customVideoStarted(api: string, processor?: VideoProcessor | VideoProcessorOptions): void;
    customVideoStartFailed(api: string, error: Error, processor?: VideoProcessor | VideoProcessorOptions): void;
    localVideoStopFailed(api: string, error: Error): void;
    localVideoStopped(api: string): void;
    videoProcessorDisabled(api: string): void;
    videoProcessorDisableFailed(api: string, error: Error): void;
    videoProcessorEnabled(api: string, processor: VideoProcessor | VideoProcessorOptions): void;
    videoProcessorEnableFailed(api: string, error: Error, processor: VideoProcessor | VideoProcessorOptions): void;
    videoConstraintsApplied(api: string, constraints: MediaTrackConstraints): void;
    videoConstraintsApplyField(api: string, error: Error, constraints: MediaTrackConstraints): void;
    private sendUserActionInfo;
    private sendUserActionError;
    private send;
}
