import Event from '../Event';
/**
 * @ignore
 */
export default class VideoPresentationEvent extends Event {
    conferenceId: string;
    userId: string;
    constructor(type: string, conferenceId: string, userId: string);
}
