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
 * The ConferenceCreatedNotification model gathers information about the created conferences, such as its [alias](#conferencealias), and [ID](#conferenceid).
 */
export default class ConferenceCreatedNotification extends Event {
    /** The conference alias. */
    conferenceAlias: string;
    /** The conference ID. */
    conferenceId: string;
    /** @ignore */
    constructor();
    /** @ignore */
    static fromData(data: NotificationData): ConferenceCreatedNotification;
}
export {};
