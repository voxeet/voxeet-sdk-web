import { VideoProcessor } from '../../models/VideoProcessor';
/**
 * Video source types.
 *
 * @ignore
 */
export declare enum LocalVideoSourceType {
    /**
     * The source is a video input device returned by getUserMedia.
     */
    Camera = "camera",
    /**
     * The source is a custom media track that user needs to provide.
     */
    Custom = "custom"
}
/**
 * Helper class that keeps the configuration of a local video like: video source type,
 * video processor settings, video constraints, etc. It also offers a possibility
 * to easy check whether the camera or custom video.
 *
 * This is a base class to extend.
 *
 * @ignore
 */
export declare class LocalVideoConfig {
    #private;
    /**
     * Creates a video configuration for camera device.
     */
    static camera(constraints?: MediaTrackConstraints, processor?: VideoProcessor): CameraLocalVideoConfig;
    /**
     * Creates a video configuration for custom track.
     */
    static custom(userVideoTrack: MediaStreamTrack, processor?: VideoProcessor): CustomLocalVideoConfig;
    protected constructor(sourceType: LocalVideoSourceType, processor?: VideoProcessor);
    get sourceType(): LocalVideoSourceType;
    get processor(): VideoProcessor | undefined;
    set processor(processor: VideoProcessor | undefined);
    isCamera(): boolean;
    isCustom(): boolean;
    asCamera(): CameraLocalVideoConfig;
    asCustom(): CustomLocalVideoConfig;
}
/**
 * Video configuration for camera device.
 *
 * @ignore
 */
export declare class CameraLocalVideoConfig extends LocalVideoConfig {
    #private;
    constructor(constraints?: MediaTrackConstraints, processor?: VideoProcessor);
    get constraints(): MediaTrackConstraints | undefined;
}
/**
 * Video configuration for camera device.
 *
 * @ignore
 */
export declare class CustomLocalVideoConfig extends LocalVideoConfig {
    #private;
    constructor(userVideoTrack: MediaStreamTrack, processor?: VideoProcessor);
    /**
     * Returns a user-provided video track
     */
    get userVideoTrack(): MediaStreamTrack;
}
