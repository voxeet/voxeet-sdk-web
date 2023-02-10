import Event from '../Event';
import ConferenceParameters, { JoinParametersData } from '../../models/ConferenceParameters';
import { ListenOnly } from '../../models/ListenOnly';
/**
 * @ignore
 */
export interface ConferenceJoinedData {
    conferenceId: string;
    recordingStatus: string;
    recordingUser: string;
    startRecordTimestamp: number;
    metadata: JoinParametersData;
    listenOnly: ListenOnly;
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
    listenOnly: ListenOnly;
    constructor();
    static fromData(data: ConferenceJoinedData): ConferenceJoined;
    isJoinedAsRTSViewer(): boolean;
}
