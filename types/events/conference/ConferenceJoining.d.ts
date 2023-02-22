import Event from '../Event';
/**
 * @ignore
 */
export default class ConferenceJoining extends Event {
    conferenceId: string;
    constructor(conferenceId: string);
}
