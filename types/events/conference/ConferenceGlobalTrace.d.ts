import Event from '../Event';
/**
 * @ignore
 */
interface ConferenceGlobalTraceData {
    description?: string;
    data: any;
    api: string;
}
/**
 * @ignore
 */
export default class ConferenceGlobalTrace extends Event {
    description?: string;
    data: any;
    api: string;
    constructor(e: ConferenceGlobalTraceData);
    static fromData(e: ConferenceGlobalTraceData): ConferenceGlobalTrace;
}
export {};
