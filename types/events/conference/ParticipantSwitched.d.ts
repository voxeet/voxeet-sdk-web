import Event from '../Event';
/**
 * @ignore
 */
export interface ParticipantSwitchedData {
    user_id: string;
}
/**
 * @ignore
 */
export default class ParticipantSwitched extends Event {
    userId: string;
    constructor();
    static fromData(data: ParticipantSwitchedData): ParticipantSwitched;
}
