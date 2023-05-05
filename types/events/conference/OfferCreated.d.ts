import Event from '../Event';
/**
 * @ignore
 */
export interface OfferCreatedData {
    master: boolean;
    user_id: string;
    conference_id: string;
    description: any;
    candidates: any[];
    state: string;
}
/**
 * @ignore
 */
export default class OfferCreated extends Event {
    master: boolean;
    userId: string;
    conferenceId: string;
    description: any;
    candidates: any[];
    state: string;
    constructor();
    withMaster(master: boolean): this;
    withUserId(userId: string): this;
    withConferenceId(conferenceId: string): this;
    withDescription(description: any): this;
    withCandidates(candidates: any[]): this;
    withState(state: string): this;
    static fromData(data: OfferCreatedData): OfferCreated;
}
