import { LocalVideoTrack } from './LocalVideoTrack';
import { VideoProcessorOptions, VideoProcessorFlags } from '../../models/VideoProcessor';
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
    static create(inputTrack: LocalVideoTrack, processingErrorCallback: ProcessedVideoErrorCallback, flags?: VideoProcessorFlags): Promise<ProcessedVideoTrack>;
    protected constructor(inputTrack: LocalVideoTrack, processedTrack: MediaStreamTrack, engine: VideoProcessorEngine);
    setProcessorOptions(options: VideoProcessorOptions): Promise<void>;
    getProcessorOptions(): VideoProcessorOptions;
    getInputTrack(): LocalVideoTrack;
    setInputTrack(track: LocalVideoTrack): Promise<void>;
    stop(): Promise<void>;
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    get engine(): VideoProcessorEngine;
}
