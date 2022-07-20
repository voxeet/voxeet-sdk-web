import Event from '../Event';
/**
 * @ignore
 */
export interface BandwidthRestrictionChangedData {
    bandwidth: number;
}
/**
 * @name BandwidthRestrictionChanged
 * Internal Event
 * @ignore
 */
export default class BandwidthRestrictionChanged extends Event {
    bandwidth: number;
    constructor();
    static fromData(data: BandwidthRestrictionChangedData): BandwidthRestrictionChanged;
}
