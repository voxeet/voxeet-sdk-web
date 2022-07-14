import { VslWrapper } from './VslWrapper';
import { VideoProcessor } from './VideoProcessor';
/**
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
    private handleEmptyProcessor;
    private handleBokehProcessor;
    private handleBackgroundReplacementProcessor;
}
