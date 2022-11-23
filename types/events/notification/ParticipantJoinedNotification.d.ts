import Event from '../Event';
import { Participant } from '../../models/Participant';
/**
 * @ignore
 */
interface NotificationData {
    conference: {
        confAlias: string;
        confId: string;
    };
    participant: {
        userId: string;
        externalId?: string;
        externalName?: string;
    };
}
/**
 * The ParticipantJoinedNotification model contains information about a participant who joined a conference.
 */
export default class ParticipantJoinedNotification extends Event {
    /** The conference alias. */
    conferenceAlias: string;
    /** The conference ID. */
    conferenceId: string;
    /** The participant who joined the conference.*/
    participant: Participant;
    /** @ignore */
    constructor();
    /** @ignore */
    static fromData(data: NotificationData): ParticipantJoinedNotification;
}
export {};
