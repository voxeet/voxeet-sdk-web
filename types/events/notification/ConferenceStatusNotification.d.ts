import Event from '../Event';
import { Participant } from '../../models/Participant';
/**
 * @ignore
 */
interface ParticipantData {
    userId: string;
    externalId?: string;
    externalName?: string;
    status: string;
}
interface NotificationData {
    confAlias: string;
    confId: string;
    live: boolean;
    participants: Array<ParticipantData>;
}
/**
 * The ConferenceStatusNotification model gathers information about the conference status.
 */
export default class ConferenceStatusNotification extends Event {
    /** The conference alias.*/
    conferenceAlias: string;
    /** The conference ID.*/
    conferenceId: string;
    /** The conference status.*/
    live: boolean;
    /** The list of conference participants.*/
    participants: Array<Participant>;
    /** @ignore  */
    constructor();
    /** @ignore  */
    static fromData(data: NotificationData): ConferenceStatusNotification;
}
export {};
