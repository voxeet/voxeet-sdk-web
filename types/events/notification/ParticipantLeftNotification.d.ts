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
 * The ParticipantLeftNotification model contains information about a participant who left a conference.
 */
export default class ParticipantLeftNotification extends Event {
    /** The conference alias. */
    conferenceAlias: string;
    /** The conference ID.*/
    conferenceId: string;
    /** The participant who left the conference.*/
    participant: Participant;
    /** @ignore */
    constructor();
    /** @ignore */
    static fromData(data: NotificationData): ParticipantLeftNotification;
}
export {};
