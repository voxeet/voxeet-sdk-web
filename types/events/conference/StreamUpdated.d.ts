import Event from '../Event';
import { MediaStreamWithType } from '../../models/MediaStream';
/**
 * @ignore
 */
export interface StreamUpdatedData {
    peerId: string;
    stream: MediaStreamWithType;
}
/**
 * @name StreamUpdated
 * Internal Event
 */
export default class StreamUpdated extends Event {
    peerId: string;
    stream: MediaStreamWithType;
    constructor();
    static fromData(data: StreamUpdatedData): StreamUpdated;
}
