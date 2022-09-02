import { LocalVideoTrack } from './LocalVideoTrack';
/**
 * @ignore
 */
export declare class CameraVideoTrack extends LocalVideoTrack {
    #private;
    static create(constraints?: MediaTrackConstraints): Promise<CameraVideoTrack>;
    protected constructor(track: any, constraints: MediaTrackConstraints);
    getConstraints(): MediaTrackConstraints;
    stop(): Promise<void>;
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
}
