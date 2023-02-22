import Event from '../Event';
import { MediaStreamWithType } from '../../models/MediaStream';
/**
 * @ignore
 */
export interface StreamRemovedData {
    peerId: string;
    stream: MediaStreamWithType;
}
/**
 * @name StreamRemoved
 * Internal Event
 */
export default class StreamRemoved extends Event {
    peerId: string;
    stream: MediaStreamWithType;
    constructor();
    static fromData(data: StreamRemovedData): StreamRemoved;
}
