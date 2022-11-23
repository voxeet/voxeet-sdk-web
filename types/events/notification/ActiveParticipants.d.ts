import Event from '../Event';
import { Participant } from '../../models/Participant';
export declare type ConferenceData = {
    confId: string;
    confAlias: string;
};
export declare type ParticipantData = {
    userId: string;
    externalId: string;
    externalName: string;
    participantType: string;
    participantStatus: string;
};
/**
 * @ignore
 */
export interface ActiveParticipantsData {
    participants: ParticipantData[];
    conference: ConferenceData;
    participantCount: number;
}
/**
 * The ActiveParticipants model gathers information about all participants who joined a specific conference.
 */
export default class ActiveParticipants extends Event {
    /** The objects of participants who joined the conference. This property contains external IDs, IDs, and names. All other properties of the Participant objects contain the default values. */
    participants: Participant[];
    /** The conference alias.*/
    conferenceAlias: string;
    /** The conference ID.*/
    conferenceId: string;
    /** The number of participants who joined the conference.*/
    participantCount: number;
    /** @ignore */
    constructor();
    /** @ignore */
    static fromData(data: ActiveParticipantsData): ActiveParticipants;
}
