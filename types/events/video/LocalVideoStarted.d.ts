import Event from '../Event';
/**
 * @ignore
 */
export interface LocalVideoStartedData {
    track: MediaStreamTrack;
}
/**
 * @ignore
 */
export default class LocalVideoStarted extends Event {
    track: MediaStreamTrack;
    constructor();
    static fromData(data: LocalVideoStartedData): LocalVideoStarted;
}
