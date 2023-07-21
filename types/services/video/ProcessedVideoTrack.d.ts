import { LocalVideoTrack } from './LocalVideoTrack';
import { VideoProcessor } from '../../models/VideoProcessor';
import { VideoProcessorEngine, VideoProcessingErrorCallback } from './VideoProcessorEngine';
/**
 * Callback called when an exceptions occurs during processing a video frame.
 * @ignore
 */
export declare type ProcessedVideoErrorCallback = VideoProcessingErrorCallback;
/**
 * @ignore
 */
export declare class ProcessedVideoTrack extends LocalVideoTrack {
    #private;
    static create(inputTrack: LocalVideoTrack, processingErrorCallback: ProcessedVideoErrorCallback): Promise<ProcessedVideoTrack>;
    protected constructor(inputTrack: LocalVideoTrack, processedTrack: MediaStreamTrack, engine: VideoProcessorEngine);
    setProcessor(processor: VideoProcessor): Promise<void>;
    getProcessor(): VideoProcessor;
    getInputTrack(): LocalVideoTrack;
    setInputTrack(track: LocalVideoTrack): Promise<void>;
    stop(): Promise<void>;
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    get engine(): VideoProcessorEngine;
}
