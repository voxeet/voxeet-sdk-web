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
    avatarUrl: string;
    externalId: string;
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
    avatarUrl: string;
    externalId: string;
    constructor();
    static fromData(data: ParticipantUpdatedData): ParticipantUpdated;
}
