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
 * The ConferenceCreatedNotification model gathers information about created conferences.
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
