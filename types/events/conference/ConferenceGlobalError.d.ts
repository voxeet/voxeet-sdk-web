import Event from '../Event';
/**
 * @ignore
 */
export default class ConferenceGlobalError extends Event {
    error: Error;
    code?: number;
    constructor(e: Error, code?: number);
    static fromData(e: Error, code?: number): ConferenceGlobalError;
}
