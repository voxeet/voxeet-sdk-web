import Event from '../Event';
/**
 * @ignore
 */
interface NotificationData {
    conference: {
        confAlias: string;
        confId: string;
    };
}
/**
 * The ConferenceEndedNotification model gathers information about the ended conferences, such as its [alias](#conferencealias), and [ID](#conferenceid).
 */
export default class ConferenceEndedNotification extends Event {
    /** The conference alias. */
    conferenceAlias: string;
    /** The conference ID. */
    conferenceId: string;
    /** @ignore */
    constructor();
    /** @ignore */
    static fromData(data: NotificationData): ConferenceEndedNotification;
}
export {};
