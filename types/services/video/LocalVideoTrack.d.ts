/**
 * Base class for local video tracks like camera or custom video track.
 *
 * @ignore
 */
export declare class LocalVideoTrack {
    protected mediaStreamTrack: MediaStreamTrack;
    protected constructor(track: MediaStreamTrack);
    getMediaStreamTrack(): MediaStreamTrack;
    stop(): Promise<void>;
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
}
