import Event from '../Event';
/**
 * @ignore
 */
export interface LocalVideoStoppedData {
    track: MediaStreamTrack;
}
/**
 * @ignore
 */
export default class LocalVideoStopped extends Event {
    track: MediaStreamTrack;
    constructor();
    static fromData(data: LocalVideoStoppedData): LocalVideoStopped;
}
