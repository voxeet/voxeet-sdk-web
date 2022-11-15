import Event from '../Event';
import ConferenceParameters, { JoinParametersData } from '../../models/ConferenceParameters';
/**
 * @ignore
 */
export interface ConferenceJoinedData {
    conferenceId: string;
    recordingStatus: string;
    recordingUser: string;
    startRecordTimestamp: number;
    metadata: JoinParametersData;
    listenOnly: boolean;
}
/**
 * @name ConferenceJoined
 * Internal Event
 */
export default class ConferenceJoined extends Event {
    conferenceId: string;
    recordingStatus: string;
    recordingParticipant: string;
    recordingStartTimestamp: number;
    parameters: ConferenceParameters;
    listenOnly: boolean;
    constructor();
    static fromData(data: ConferenceJoinedData): ConferenceJoined;
}
