import { LocalVideoTrack } from './LocalVideoTrack';
import { VideoProcessor } from './VideoProcessor';
import { VideoProcessorEngine } from './VideoProcessorEngine';
/**
 * @ignore
 */
export declare class ProcessedVideoTrack extends LocalVideoTrack {
    #private;
    static create(inputTrack: LocalVideoTrack): Promise<ProcessedVideoTrack>;
    protected constructor(inputTrack: LocalVideoTrack, processedTrack: MediaStreamTrack, engine: VideoProcessorEngine);
    setProcessor(processor: VideoProcessor): Promise<void>;
    getProcessor(): VideoProcessor;
    getInputTrack(): LocalVideoTrack;
    stop(): Promise<void>;
}
