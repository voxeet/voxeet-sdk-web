import Event from '../Event';
/**
 * @ignore
 */
export interface ConferenceDestroyedData {
    conferenceId: string;
    conferenceAlias: string;
}
/**
 * @ignore
 */
export default class ConferenceDestroyed extends Event {
    conferenceId: string;
    conferenceAlias: string;
    constructor();
    static fromData(data: ConferenceDestroyedData): ConferenceDestroyed;
}
