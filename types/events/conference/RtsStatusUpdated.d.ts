import Event from '../Event';
/**
 * @ignore
 */
export interface RtsStatusUpdatedData {
    status: string;
    streamName: string;
    streamAccountId: string;
    subscribeToken: string;
    conferenceId: string;
}
/**
 * @ignore
 */
export default class RtsStatusUpdated extends Event {
    status: string;
    streamName: string;
    streamAccountId: string;
    subscribeToken: string;
    conferenceId: string;
    constructor();
    static fromData(data: RtsStatusUpdatedData): RtsStatusUpdated;
}
