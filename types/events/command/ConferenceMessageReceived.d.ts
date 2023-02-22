import Event from '../Event';
export interface MessageReceivedData {
    message: string;
    conference_id: string;
    user_id: string;
}
export default class ConferenceMessageReceived extends Event {
    message: string;
    conferenceId: string;
    participantId: string;
    constructor();
    static fromData(data: MessageReceivedData): ConferenceMessageReceived;
}
