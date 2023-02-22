import Event from '../Event';
/**
 * @ignore
 */
export interface ParticipantKickedData {
    userId: string;
    status: string;
    participantType: string;
    audio: boolean;
    audioReceivingStopped: boolean;
}
/**
 * @ignore
 */
export default class ParticipantKicked extends Event {
    userId: string;
    status: string;
    participantType: string;
    audio: boolean;
    audioReceivingStopped: boolean;
    constructor();
    static fromData(data: ParticipantKickedData): ParticipantKicked;
}
