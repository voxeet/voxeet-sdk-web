import { LocalVideoTrack } from './LocalVideoTrack';
/**
 * @ignore
 */
export declare class CustomVideoTrack extends LocalVideoTrack {
    static create(track: MediaStreamTrack): CustomVideoTrack;
    protected constructor(track: MediaStreamTrack);
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
}
