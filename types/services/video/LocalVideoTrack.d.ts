/**
 * @ignore
 */
export declare class LocalVideoTrack {
    protected mediaStreamTrack: MediaStreamTrack;
    protected constructor(track: MediaStreamTrack);
    getMediaStreamTrack(): MediaStreamTrack;
    stop(): Promise<void>;
}
