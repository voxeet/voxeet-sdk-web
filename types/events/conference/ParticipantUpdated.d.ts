import Event from '../Event';
import { Participant } from '../../models/Participant';
import { Metadata } from '../../models/Metadata';
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
    video: boolean;
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
    video: boolean;
    metadata: Metadata;
    constructor();
    static fromData(data: ParticipantUpdatedData): ParticipantUpdated;
    static fromParticipant(participant: Participant): ParticipantUpdated;
}
