import Event from '../Event';
/**
 * @ignore
 */
export interface ParticipantUpdatedData {
    user_id: string;
    status: string;
    participantType: string;
    audio: boolean;
    audioReceivingStopped: boolean;
    name: string;
}
/**
 * @ignore
 */
export default class ParticipantUpdated extends Event {
    userId: string;
    status: string;
    participantType: string;
    audio: boolean;
    audioReceivingStopped: boolean;
    name: string;
    constructor();
    static fromData(data: ParticipantUpdatedData): ParticipantUpdated;
}
