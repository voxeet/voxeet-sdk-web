import Event from '../Event';
import { ConferenceJoined } from '../conference';
/**
 * @ignore
 */
export interface RecordingStatusUpdatedData {
    user_id: string;
    recording_status: string;
    start_record_timestamp: number;
}
export default class RecordingStatusUpdated extends Event {
    participantId: string;
    status: string;
    startTimestamp: number;
    constructor();
    static fromData(data: RecordingStatusUpdatedData): RecordingStatusUpdated;
    static fromJoinEvent(data: ConferenceJoined): RecordingStatusUpdated;
}
