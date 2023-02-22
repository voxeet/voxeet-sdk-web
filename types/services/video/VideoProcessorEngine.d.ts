import { VslWrapper } from './VslWrapper';
import { VideoProcessor } from '../../models/VideoProcessor';
import { VideoServiceError } from '../../lib/Exceptions';
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
    setProcessor(processor: VideoProcessor): Promise<void>;
    getProcessor(): VideoProcessor;
    getOutputStream(): Promise<MediaStream>;
    changeOutputStreamFrameRate(frameRate: number): Promise<void>;
    changeInputStream(stream: MediaStream): Promise<void>;
    private handleEmptyProcessor;
    private handleBokehProcessor;
    private handleBackgroundReplacementProcessor;
}
