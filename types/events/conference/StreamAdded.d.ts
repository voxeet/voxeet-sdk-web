import Event from '../Event';
import { MediaStreamWithType } from '../../models/MediaStream';
/**
 * @ignore
 */
export interface StreamAddedData {
    peerId: string;
    stream: MediaStreamWithType;
}
/**
 * @name StreamAdded
 * Internal Event
 */
export default class StreamAdded extends Event {
    peerId: string;
    stream: MediaStreamWithType;
    constructor();
    static fromData(data: StreamAddedData): StreamAdded;
}
