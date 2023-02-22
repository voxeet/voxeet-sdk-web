import Event from '../Event';
export interface ParticipantAddedData {
    user_id: string;
    externalId: string;
    name: string;
    avatarUrl: string;
    status: string;
    metadata: object;
    participantType: string;
    audio: boolean;
    audioReceivingStopped: boolean;
    video: boolean;
}
export default class ParticipantAdded extends Event {
    userId: string;
    externalId: string;
    name: string;
    avatarUrl: string;
    status: string;
    metadata: object;
    participantType: string;
    audio: boolean;
    audioReceivingStopped: boolean;
    video: boolean;
    constructor();
    static fromData(data: ParticipantAddedData): ParticipantAdded;
}
