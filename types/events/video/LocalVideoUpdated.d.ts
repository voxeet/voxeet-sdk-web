import Event from '../Event';
/**
 * @ignore
 */
export interface LocalVideoUpdatedData {
    track: MediaStreamTrack;
}
/**
 * @ignore
 */
export default class LocalVideoUpdated extends Event {
    track: MediaStreamTrack;
    constructor();
    static fromData(data: LocalVideoUpdatedData): LocalVideoUpdated;
}
