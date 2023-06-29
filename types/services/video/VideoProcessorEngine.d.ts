import { VideoServiceError } from '../../lib/Exceptions';
import { VideoProcessorOptions } from '../../models/VideoProcessor';
import { VslWrapper } from './VslWrapper';
/**
 * Callback called when an exceptions occurs during processing a video frame.
 * @ignore
 */
export declare type VideoProcessingErrorCallback = (error: VideoServiceError) => Promise<void>;
/**
 * The class provides a simple interface for managing a video processor aka. VSL.
 * All VSL stuff like initialization, VSL's error handling, managing VSL instance's
 * life-cycle are handled here.
 * @ignore
 */
export declare class VideoProcessorEngine {
    #private;
    static create(inputStream: MediaStream): Promise<VideoProcessorEngine>;
    constructor(vsl: VslWrapper);
    stop(): void;
    start(): void;
    setProcessingErrorCallback(callback: VideoProcessingErrorCallback): void;
    setOptions(options: VideoProcessorOptions): Promise<void>;
    getOptions(): VideoProcessorOptions;
    getOutputStream(): Promise<MediaStream>;
    changeOutputStreamFrameRate(frameRate: number): Promise<void>;
    changeInputStream(stream: MediaStream): Promise<void>;
    private handleVirtualBackground;
    private handleFacialSmoothing;
    private handleAutoBrightness;
    private handleSpotLight;
    private handleNoiseReduction;
    private handleAutoFraming;
}
