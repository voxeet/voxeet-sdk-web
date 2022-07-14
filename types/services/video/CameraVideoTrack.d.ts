import { LocalVideoTrack } from './LocalVideoTrack';
/**
 * @ignore
 */
export declare class CameraVideoTrack extends LocalVideoTrack {
    #private;
    static create(constraints?: MediaTrackConstraints): Promise<CameraVideoTrack>;
    protected constructor(track: MediaStreamTrack, constraints: MediaTrackConstraints);
    getConstraints(): MediaTrackConstraints;
    stop(): Promise<void>;
}
