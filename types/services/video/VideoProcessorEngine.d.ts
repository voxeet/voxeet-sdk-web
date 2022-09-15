import { VslWrapper } from './VslWrapper';
import { VideoProcessor } from '../../models/VideoProcessor';
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
    stop(): Promise<void>;
    setProcessor(processor?: VideoProcessor): Promise<void>;
    getProcessor(): VideoProcessor;
    getOutputStream(): Promise<MediaStream>;
    changeInputStream(stream: MediaStream): Promise<void>;
    private handleEmptyProcessor;
    private handleBokehProcessor;
    private handleBackgroundReplacementProcessor;
}
