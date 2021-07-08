import Event from '../Event';
/**
 * @ignore
 */
export default class ConferenceGlobalError extends Event {
    error: Error;
    constructor(e: Error);
    static fromData(e: Error): ConferenceGlobalError;
}
