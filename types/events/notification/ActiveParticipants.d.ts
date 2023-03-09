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
    viewerCount: number;
}
/**
 * The ActiveParticipants model gathers information about all participants who joined a specific conference.
 */
export default class ActiveParticipants extends Event {
    /** The objects of all participants who joined the conference and use only the Communications APIs. The property does not contain objects of [Real-time Streaming viewers](../enums/models_Options.ListenType.html#Mixed). */
    participants: Participant[];
    /** The conference alias.*/
    conferenceAlias: string;
    /** The conference ID.*/
    conferenceId: string;
    /** The number of all participants who joined the conference and use only the Communications APIs. This property does not count [Real-time Streaming viewers](../enums/models_Options.ListenType.html#Mixed).*/
    participantCount: number;
    /** The number of Real-time Streaming viewers who joined the conference. */
    viewerCount: number;
    /** @ignore */
    constructor();
    /** @ignore */
    static fromData(data: ActiveParticipantsData): ActiveParticipants;
}
