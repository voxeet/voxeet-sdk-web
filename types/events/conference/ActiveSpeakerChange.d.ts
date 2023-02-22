import Event from '../Event';
/**
 * @ignore
 */
export interface ActiveSpeakerData {
    activeSpeakers: string[];
    conferenceId: string;
}
/**
 * @ignore
 */
export default class ActiveSpeakerChange extends Event {
    speakers: string[];
    conferenceId: string;
    constructor();
    static fromData(data: ActiveSpeakerData): ActiveSpeakerChange;
}
