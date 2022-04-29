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
 * The ActiveParticipants model gathers information about all participants who joined a specific conference. The model includes the conference [alias](#conferencealias) and [ID](#conferenceid), the [list](#participants) of conference participants, and the [number](#participantcount) of all participants who joined the conference.
 */
export default class ActiveParticipants extends Event {
    /** Participants who joined the conference.*/
    participants: Participant[];
    /** The conference alias.*/
    conferenceAlias: string;
    /** The conference ID.*/
    conferenceId: string;
    /** The number of all participants who joined the conference.*/
    participantCount: number;
    /** @ignore */
    constructor();
    /** @ignore */
    static fromData(data: ActiveParticipantsData): ActiveParticipants;
}
