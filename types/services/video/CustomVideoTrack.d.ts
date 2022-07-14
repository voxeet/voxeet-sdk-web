import { LocalVideoTrack } from './LocalVideoTrack';
/**
 * @ignore
 */
export declare class CustomVideoTrack extends LocalVideoTrack {
    static create(track: MediaStreamTrack): CustomVideoTrack;
    constructor(track: MediaStreamTrack);
}
